## set up the backend as usual

previously we used to connect with the database in out server.ts

this time we won't connect anything like before ; we will create a tenantDB.ts to create and connect the database

![alt text](image-1.png)

## create database and connect

![alt text](image-2.png)

```
const connections: Record<string, Connection> = {};

```

here , **connections** a dictionary object (cache) to store tenant-specific database connections.

**Record** is a utility type in ts that allows you to define an object type with specific keys and values

keys will be string type

**Connection** is object from mongoose that will hold the values for those keys ,those values will be specific database connection for the different tenant ids.




## Declare interface for Request 

![alt text](image-3.png)


```
import { Connection } from "mongoose";
import { ITenant } from "../../app/modules/tenant/tenant.interface";

declare module "express-serve-static-core" {
    interface Request {
        dbConnection?: Connection;
        tenant?: ITenant
    }
}

```

This block is important when you want to attach custom properties to the req (Request) object in Express while using TypeScript.

```
import { Connection } from "mongoose";

```
--> importing Connection from Mongoose to annonate or explicitly define the type of the 'dbConnection' field, which stores the active Mongoose connection for a tenant.


```
declare module "express-serve-static-core" 

```
--> This is a TypeScript's way of saying:   **“I want to modify or extend an existing module declaration.”**
--> In this case, we’re extending the core types of the Express framework.
--> `express-serve-static-core` is the **internal type definition module used by Express** to define types like `Request`, `Response`, and `NextFunction`.



```
interface Request {

```

--> By this we are extending the **Request** interface, which represents the HTTP request object in Express.


```
 dbConnection?: Connection;

```
--> This means you're adding an **optional property** called `dbConnection` to the Express request object.
--> Its type is `Connection`, imported from Mongoose.
--> This lets you do `req.dbConnection` **without TypeScript throwing a type error**
--> same goes for tenant and it's following the model ITenant. This allows you to safely access req.tenant in your routes or middleware.

## To check multi-tenancy locally:

**Need to change the Host file**

Steps to do it:

1. Go to the search option and search for the notepad
2. right click on notepad and run as administrator
3. go to file --> open--> this pc --> drive c--> Windows --> System32 --> drivers --> etc
4. click on Text document and select All Files (_._)
5. click on the host file and click open
6. after editing any new lines click on file and save

![alt text](image.png)

--> When i tried 'http://tenant3:5000/api/v1/to-do-list' : this one did not work. as there was nothing to split with (.) and so there was nothing in array[0]

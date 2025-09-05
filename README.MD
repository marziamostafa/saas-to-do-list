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

Following steps are performed to try to reproduce the issue :

1) Create CUPS : 
     cf cups testcups  -p "admin, pass"
2) Filled in values at command prompt (initially set as admin/pass)
3) cf bind-service <myapp> testcups
4) Restaged application
5) Made sure i am getting values i assigned. (in the UI)
6) cf uups testcups  -p "admin, pass" 
7) set values as admin1/pass1
8) Restaged my application
9) Got expected results.

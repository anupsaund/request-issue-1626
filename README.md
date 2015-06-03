# request-issue-1626
Project showing issues with Request


### Setup

1. Clone 
2. npm i 

### Tests

#### Test 1
```bash
node test1.js
```

This will show a basic post to google.com (Note: please ignore that the response is failed. I am testing to see if the request leaves the computer)

#### Test 2
```bash
node test2.js
```

This test is the same as test1 except the payload on formData is bigger. This one fails with a maximum call stack exceeded

#### Test 3
```bash
sh curl.sh
```

This test has the same payload as test2 which failed - except this curl does work.


Test 3 is showing me that the payload is OK to send but it is not working through the nodejs request.

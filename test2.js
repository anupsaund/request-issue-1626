var req = require('request');

var postOptions = {
     headers: {
       "Accept":"application/json",
       "Content-Type":"application/json"
     },
     url: "http://www.google.com",
     json:true,
     formData: '{"data":{"DropId":"f618b059-36ce-498f-936f-37ecbede363a","Telephone":[],"DropLocationLatitude":88.91215131,"Type":"Delivery","Signature_Customer":"","DeliverToNeighbour":false,"RouteId":"RJ030014241114","DropResultId":"f618b059-36ce-498f-936f-37ecbede363a","Photos":[],"ReasonText":"","Signature_CrewMember":"","VehicleId":"XXXX","UPIList":[{"Condition":{"TimeStamp":"2014-11-24T02:13:03Z","Status":"PASS","Latitude":66.91215131,"ConditionId":"4a14cac0-c6cd-5fd5-b98a-c2f3ced623c5","Longitude":-1.45289511},"Status":"Scanned","index":0,"Photos":[{"TimeStamp":"2014-11-24T02:13:19Z","ImageId":"22ef7db2-2796-63a8-25b4-7adadef89a91","Latitude":11.91215131,"UPI":"8WDV30055134A094","Longitude":-1.45289511,"EvidenceId":"22ef7db2-2796-63a8-25b4-7adadef89a91"}],"Scan":{"TimeStamp":"2014-11-24T02:12:55Z","ScanResultId":"5e685c64-b03b-bd1d-2e98-ab1a6251e31e","Latitude":99.91215131,"Longitude":-1.45289511},"ServiceCount":2,"ServiceResults":[{"ServiceCode":"1018","ServiceOutcome":"PASS","Status":"PASS","ServiceTimeStamp":"2014-11-24T02:13:01Z","ServiceResultId":"406214d4-3387-800c-3162-8aed9358d13d","ServiceLocationLongitude":-1.45289511,"ServiceLocationLatitude":52.91215131},{"ServiceCode":"1020","ServiceOutcome":"PASS","Status":"PASS","ServiceTimeStamp":"2014-11-24T02:13:02Z","ServiceResultId":"1f4bfac9-5b70-504e-dd62-fb7697773163","ServiceLocationLongitude":-1.45289511,"ServiceLocationLatitude":52.91215131}],"Identifier":"8WDV30055134A094","UPIResultId":"f87f5618-1d07-5635-1355-a5076f4b104e"},{"Status":"Scanned","index":1,"Scan":{"TimeStamp":"2014-11-24T02:12:57Z","ScanResultId":"46228262-528f-1141-bfaa-4a3b9cabac0c","Latitude":24.2242,"Longitude":-1.23231},"Identifier":"8WDV30055134B094","UPIResultId":"f4c4be35-301b-8132-5f5d-4283b0c8ad1a"}],"UnableToSign":false,"TelephoneStatus":"","index":33,"DropType":"Delivery","DropTimeStamp":"2014-11-24T02:13:40Z","messageType":"Drop","Notes":"","DropLocationLongitude":-1.232323,"Status":"Complete","Audit":[],"StopId":2,"ReasonId":138,"SMS":[]},"transport":{"type":"zumoDirect","httpMethod":"POST","api":"DropIT"}}'
};

req.post(postOptions, function(err,httpResponse,body){
     console.log(body);
});

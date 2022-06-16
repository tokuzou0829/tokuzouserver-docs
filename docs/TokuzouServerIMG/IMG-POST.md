---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">POST</Highlight> https://img.tokuzouserver.net/


## Request object
Use multipart/form-data.

| Key | value | Description | Required |
| ---- | ---------- | ----------- | -------- | 
| file | IMG_File | Select files to upload | <Highlight color="#d73232">Required</Highlight>|

## Response
| Code | Description |
| ---- | ----------- |
| 200 | Return a details of state |
| 500 | Unknown request. |
| 404 | Not Found. |

## Example Usage
```bash
curl -F 'file=@/Your_IMG_pass/file.jpg' https://img.tokuzouserver.net/
```
<Tabs>
  <TabItem value="js" label="Javascript" default>

   ```jsx title="SAMPLE_IMG_POST.js"
let bodyContent = new FormData();
bodyContent.append("file", "Your_IMG_pass");

fetch("https://img.tokuzouserver.net/", { 
  method: "POST",
  body: bodyContent,
}).then(function(response) {
  return response.text();
}).then(function(data) {
  console.log(data);
})
```

  </TabItem>

  <TabItem value="py" label="Python">

```py title="SAMPLE_IMG_POST.py"
import requests

reqUrl = "https://img.tokuzouserver.net/"

post_files = {
  "file": open("/Users/tokuzou/Downloads/41futon-1527249219106779136-20220519_202603-img1.jpg", "rb"),
}
headersList = {
 
}

payload = ""

response = requests.request("POST", reqUrl, data=payload, files=post_files, headers=headersList)

print(response.text)
```

  </TabItem>

  <TabItem value="axios" label="Axios">

```jsx title="SAMPLE_IMG_POST.js"
import axios from "axios";
var fs = require('fs');

let headersList = {
 
}

let formdata = new FormData();
formdata.append("file", fs.createReadStream("Your_IMG_pass"));

let bodyContent =  formdata;

let reqOptions = {
  url: "https://img.tokuzouserver.net/",
  method: "POST",
  headers: headersList,
  data: bodyContent,
}

axios.request(reqOptions).then(function (response) {
  console.log(response.data);
})
```

  </TabItem>

  <TabItem value="Dart" label="Dart">

```dart title="SAMPLE_IMG_POST.dart"
var headersList = {
 
};
var url = Uri.parse('https://img.tokuzouserver.net/');

var body = {
 
};
var req = http.MultipartRequest('POST', url);
req.headers.addAll(headersList);
req.files.add(await http.MultipartFile.fromPath('file', 'Your_IMG_pass'));
req.fields.addAll(body);

var res = await req.send();
final resBody = await res.stream.bytesToString();

if (res.statusCode >= 200 && res.statusCode < 300) {
  print(resBody);
}
else {
  print(res.reasonPhrase);
}
```

  </TabItem>
</Tabs>

## Example Success Response
```json
{
  "id": "UUIDv4",
  "imgname": "id.png",
  "url": "https://img.tokuzouserver.net/id.png"
}
```

## Example Error Response
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<title>500 Internal Server Error</title>
<h1>Internal Server Error</h1>
<p>The server encountered an internal error and was unable to complete your request. Either the server is overloaded or
	there is an error in the application.</p>
```

## Example Not Found Response
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<title>404 Not Found</title>
<h1>Not Found</h1>
<p>The requested URL was not found on the server. If you entered the URL manually please check your spelling and try
	again.</p>
```
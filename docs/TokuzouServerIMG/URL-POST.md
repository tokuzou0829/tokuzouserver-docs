---
sidebar_position: 2
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
Use application/json

```json
{
  "url": "https://example.com/"
}
```

## Response
| Code | Description |
| ---- | ----------- |
| 200 | Return a details of state |
| 500 | Unknown request. |
| 404 | Not Found. |

## Example Usage
```bash
curl -X POST -H "Content-Type: application/json" -d '{"url": "<Your_IMG_URL>"}'  https://img.tokuzouserver.net/
```
<Tabs>
  <TabItem value="js" label="Javascript" default>

   ```jsx title="SAMPLE_IMG_POST.js"
let headersList = {
 "Content-Type": "application/json"
}

let bodyContent = "url=https://example.com/";

fetch("https://img.tokuzouserver.net/", { 
  method: "GET",
  body: bodyContent,
  headers: headersList
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

headersList = {
 "Content-Type": "application/json" 
}

payload = "url=https://example.com/"

response = requests.request("GET", reqUrl, data=payload,  headers=headersList)

print(response.text)
```

  </TabItem>

  <TabItem value="axios" label="Axios">

```jsx title="SAMPLE_IMG_POST.js"
import axios from "axios";

let headersList = {
 "Content-Type": "application/json" 
}

let bodyContent = "url=https://example.com/";

let reqOptions = {
  url: "https://img.tokuzouserver.net/",
  method: "GET",
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
 'Content-Type': 'application/json' 
};
var url = Uri.parse('https://img.tokuzouserver.net/');

var body = {
 'url': 'https://example.com/' 
};
var req = http.Request('GET', url);
req.headers.addAll(headersList);
req.bodyFields = body;

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
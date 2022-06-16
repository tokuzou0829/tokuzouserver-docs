---
sidebar_position: 4
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

<Highlight color="#25c2a0">GET</Highlight> https://img.tokuzouserver.net/id.png


## Request Parameters
| Parameter | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| ?w=1~original_img_size | URL | Change image width | <Highlight color="#d73232">option</Highlight> | string |
| ?h=1~original_img_size | URL | Change image height | <Highlight color="#d73232">option</Highlight> | string |
| ?w=1~original_img_size&h=1~original_img_size | URL | Change image height and width | <Highlight color="#d73232">option</Highlight> | string |

## Response
| Code | Description |
| ---- | ----------- |
| 200 | Return a image |
| 500 | Unknown request. |
| 404 | Not Found. |

## Example Success Response
![sample](https://img.tokuzouserver.net/1dfedb53-2e33-431c-a648-724ce967271b.png?w=362&h=529)

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
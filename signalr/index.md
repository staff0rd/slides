class: center, middle

# Real-Time Web Applications At Scale
## with ASP.NET Core SignalR

---
# Manual approach

![](f5.webp)

---
# Clever approach

```javascript
setTimeout(() => location.reload(true), 1000);
```

---
# Real Time Web

* Bi-directional communication
* Low latency
* Any browser

???

Pushing real-time data to any browser instead of waiting for the browser to poll the server and retrieve new data.

---
# Low-level options

* Java applets (as of Netscape 2.0, March 1996)
* Server Push / Reverse AJAX / Comet
    * HTTP Polling
    * HTTP Long Polling
    * HTTP Streaming
* Server-sent events
* WebSocket Protocol
* ~~HTTP/2 Server Push~~

???

* Long polling
  * Hanging-GET
  * Always a pending request to which the server can reply, minimising latency in message delivery
  * Not awesome for small messages, as headers are sent with each request/response

* Server-sent events
  * EventSource API is standardised as part of HTML5
  * Not supported by IE or Edge

* Websockets
  * [RFC 6455](https://tools.ietf.org/html/rfc6455) first draft in February 2010, finalised in December 2011.
  * Most browsers had implemented it by 2012
  * Not bound by Cross-origin requests (CORS)

---
# High-level options

* Lightstreamer
* Ajax Push Engine (APE)

![](/ape-project.png)

* Socket.IO
* SignalR
* <https://www.leggetter.co.uk/real-time-web-technologies-guide/>

???

* Lightstreamer
  * Created at the end of 2000
  * Startup-edition price starts at $1200/year, otherwise contact sales
  * First customers were financial instutitions, in 2010 NASA set up LightStreamer to relay telemetry from the ISS
* APE
  * Open source

---
# ASP.NET SignalR

* Originally created in 2011 by [David Fowler](https://github.com/davidfowl) and [Damien Edwards](https://github.com/DamianEdwards).
* Released as part of ASP.NET in 2013
* Support >= IE8
* Scaleout with Azure Service Bus, Redis, SQL Server

???

* .NET JavaScript client depended on jQuery

---
# ASP.NET Core SignalR

* Complete rewrite
* Automatic reconnects aren't supported, reconnection must be explicit.
* Streaming
* JavaScript client is on npm
* No more jQuery
* Supports >= IE11
* Scaleout with Redis, Azure SignalR Service
* <https://docs.microsoft.com/en-us/aspnet/core/signalr/version-differences>

???

* ASP.NET Core
  * MessagePack is an efficient binary serialization format
  * Sticky sessions required due to limitation that all clients stay on the same server. This limitation does not exist on Azure SignalR Service

---
# Azure SignalR Service

* Scale, go serverless, or both, with your SignalR application.
* $68/month per 1000 connections for 1mil messages then $1.37 per 1mil messages.
* Max 10,000 connections
* Serverless = Send to client(s) only

---
# Load testing SignalR

* Crank / Crankier
* Containers
* VMs
* 236k tweet
* 111,665
* C10k/C10M

---
# SignalR in Practice
<div style="border=3px solid black;">
<img src="rps.png" width="100%" />
</div>
---

# SignalR in Practice

https://www.digitalicebreakers.com

---
# Sources

* Lightstreamer Procured by NASA for Spacecraft Telemetry
  <https://finance.yahoo.com/news/Lightstreamer-Procured-by-iw-3861648690.html>
* Build Real-time Applications with ASP.NET Core SignalR
  <https://www.codemag.com/Article/1807061/Build-Real-time-Applications-with-ASP.NET-Core-SignalR>
* Comet: Low latency data for the browser
  <https://infrequently.org/2006/03/comet-low-latency-data-for-the-browser/>

---
# Sources

* Is Comet obsolete now with server sent events and websockets
  <https://stackoverflow.com/questions/12078550/is-comet-obsolete-now-with-server-sent-events-and-websocket/>
* Real time web technologies guide
  <https://www.leggetter.co.uk/real-time-web-technologies-guide/>
* Known Issues and Best Practices for the Use of Long Polling and Streaming in Bidirectional HTTP
  <https://tools.ietf.org/html/rfc6202>

---
# Sources

* ASP.NET - Building a Simple Comet Application in the Microsoft .NET Framework
  <https://msdn.microsoft.com/en-us/magazine/jj891053.aspx>

# These slides

* remark
  <https://github.com/gnab/remark>

---
class: center, middle

# Thank-you
## staffordwilliams.com
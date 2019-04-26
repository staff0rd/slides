class: center, middle

# ASP.NET Core SignalR
## Let's talk about it

---
class: middle

# Agenda

1. Introduction
2. ASP.NET Core SignalR
3. Demo

---

# Real Time Web

* Comet
* Long polling
* Server-sent events
* WebSocket Protocol

???

* Pushing real-time data to any browser instead of waiting for the browser to poll the server and retrieve new data (the traditional "keep-refreshing-the-page" paradigm)

* Long polling
  * Server does not immediately reply to each HTTP request, responding only when there are events to deliver.
  * Always a pending request to which the server can reply, minimising latency in message delivery
  * Not awesome for small messages, as headers are sent with each request/response

* Websockets
  * [RFC 6455](https://tools.ietf.org/html/rfc6455) first draft in February 2010, finalised in December 2011.

---



# Real Time Web - Frameworks

* Lightstreamer
* Socket.IO
* SignalR
* keeprefreshing.com

???

* Lightstreamer
  * Created at the end of 2000
  * Startup-edition price starts at $1200/year, otherwise contact sales
  * First customers were financial instutitions, in 2010 NASA set up LightStreamer to relay telemetry from the ISS




# What is SignalR?

* Originally created in 2011 by [David Fowler](https://github.com/davidfowl) and [Damien Edwards](https://github.com/DamianEdwards).
* Released as part of ASP.NET in 2013
* RPS Tournament


???

* .NET JavaScript client depended on jQuery

---

# ASP.NET Core SignalR

* Complete rewrite

??? 

---

# Sources

* [Lightstreamer Procured by NASA for Spacecraft Telemetry](https://finance.yahoo.com/news/Lightstreamer-Procured-by-iw-3861648690.html)
* [Build Real-time Applications with ASP.NET Core SignalR](https://www.codemag.com/Article/1807061/Build-Real-time-Applications-with-ASP.NET-Core-SignalR), Anthony Chu


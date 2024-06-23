<h1 align=center>NetAwareAI</h1>
<p align=center>NetAware AI is a realtime network data monitoring and management solution that improves base station electricity consumption.</p>

<img width="1440" alt="Screenshot 2024-06-23 at 8 16 06 AM" src="https://github.com/raj978/netaware-ai/assets/55466615/f021d15c-288c-4e2f-9958-5fba9f8fe916">

<!-- installation -->
## ⚙️Installation

#### Setup ENV Variable: 
- Clerk (get API key from Clerk Installation)
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZW5hYmxlZC10dXJ0bGUtMjYuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_*************************
```

```
npm install
```

* Run locally

```
npm run dev
```

After that, it will open up a preview of the template in your default browser, watch for changes to source files, and live-reload the browser when changes are saved.

## 🔨Production Build

After finishing all the customization, you can create a production build by running this command.

```
npm run build
```

## Inspiration

The inspiration for your project NetAwareAI stems from the climate change problem. The demand for 5G networks around the world have significantly increased due to the increase in data traffic due to the proliferation of connected devices around the world. With more data being managed results more energy being used to manage the data. We acknowledged the need for a strategic optimization algorithm that can help efficiently allocate energy to certain network nodes in order to make sure sufficient energy is present for effective data processing. We also aim to educate the upcoming generation about the importance of the energy consumption problem and it's impact on climate change. 

## How we built it
1. Front End
- Next.js (React.js): The basis for our web application, which is hosted by Vercel. We used next.js to streamline our website design and maximized the ability of React to create a webpage that can display an ergonomic dashboard that displays numerous charts and statistics through Chart.js, an open-source charting library. 
- Amazon API Gateway: We used the Amazon API Gateway to connect the Frontend (Next.js web app) to the Backend (Amazon S3) REST API, which exchanges messages between the two through JSON.
- AWS Lambda: 
- Amazon CloudWatch:

2. Back End
- Amazon Kinesis:
- Amazon S3:
- AWS Glue:
- AWS SageMaker:

## Challenges we ran into

## Accomplishments that we're proud of

## What we learned

## What's next for NetAware AI

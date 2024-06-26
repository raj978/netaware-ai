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

## How we built it?
Our tech stack includes:
- Next.js 14 for the WebApp hosted on vercel
- Clerk for a seamless and drop-in OAuth Provider
- AWS Kinesis, Glue, and SageMaker for ML Pipeline and Real-time Data Ingestion
- AWS Bedrock with Claude Anthropic FM fine-tuned to offer network insights
- AWS Web API Gateway interacting with AWS Lambda to allow for initiating MLOps
- AWS S3 Bucket for centralized data storage of Elastic Container Registry instance of Sage Maker, Real-Time Ingestion from Kinesis, and instance of AWS Bedrock.

## Challenges we ran into
Some challenges we faced along the way was figuring out all the AWS Policies and Configurations for each of the AWS Services/technologies. 
- AWS Policies and Configurations for each of the AWS Services/technologies.
- Limitation to stay within the AWS EcoSystem to allow for real-time data ingestion from telecom providers that can be supported using insights from Bedrock.

## Accomplishments that we're proud of
- Effectively utilized and integrated a collection of AWS products to build a stable product framework.
- Designed a web application using Next.js that included authorization sign-on (powered by Clerk)
- Fine-tuned a Machine Learning model from an open-source library to improve accuracy and get different results

## What we learned
- 

## What's next for NetAware AI

Model from : [Github]{https://github.com/ITU-AI-ML-in-5G-Challenge/5G-Energy-Consumption-Modelling-Solution-Team-Farzi-Data-Scientists}

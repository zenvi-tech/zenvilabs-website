import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">PRIVACY POLICY</CardTitle>
            <p className="text-muted-foreground">Our Privacy Policy is based on Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016.</p>
          </CardHeader>

          <CardContent className="prose prose-sm max-w-none dark:prose-invert">
            <h2 className="text-xl font-semibold mt-6 mb-3">OUR CONTACT DETAILS</h2>

            <p>
              JIRO SIMPLIFIED BILLS SL (Zenvi).
            </p>

            <p>
              Príncipe de Vergara Street 94, staircase B, 8th Floor, Left.
            </p>

            <p>
              28006 Madrid.
            </p>

            <p>
              Email: <a href="mailto:lopd@zenvi.es" className="text-primary hover:underline">lopd@zenvi.es</a>.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">WHAT DO WE USE PERSONAL DATA FOR?</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">To provide our services</h3>

            <p>
              As data controllers, we use our Users' personal identification, contact information, and economic and financial information to provide our services.
            </p>

            <p>
              Our Users can view, analyze, and compare their bills/contracts with those of other utility providers (electricity, gas, telephone, etc.) and switch providers.
            </p>

            <p>
              The invoices provided by Users to Zenvi, and all associated data (for example, amounts, dates, due dates, acceptance or observations, payments/collections, etc.) are stored on our platform, and storing such data is part of our services.
            </p>

            <p>
              We also use bank details and other necessary information provided by the User to extract the information needed to provide our services.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Send you commercial communications</h3>

            <p>
              As a customer, and pursuant to the legitimacy granted by Article 21 of Law 34/2002, of July 11, on information society services and electronic commerce, Zenvi may send you advertising about our products or services related to the service you have contracted. In any case, you may opt out of the processing of your data for promotional purposes by sending an email to <a href="mailto:lopd@zenvi.es" className="text-primary hover:underline">lopd@zenvi.es</a>.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">ON WHAT LEGAL BASIS DO WE PROCESS PERSONAL DATA?</h2>

            <p>
              We process personal data provided that at least one of the following conditions is met:
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li>That the interested party has given us their consent.</li>
              <li>That is necessary to provide our services to the User.</li>
              <li>That it is necessary for the fulfillment of our legal obligations.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">TO WHICH POSSIBLE RECIPIENTS CAN WE COMMUNICATE PERSONAL DATA?</h2>

            <p>
              We only share our Users' personal data with the following recipients, as data processors:
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li>Our technology providers, for example, for the maintenance of our systems or for providing invoice reading services.</li>
              <li>The collaborating entities that provide services to Zenvi Users.</li>
              <li>Any administrative or judicial authority competent in the prevention of money laundering and terrorist financing in compliance with the Money Laundering Prevention Act, in order to prevent any related transactions.</li>
              <li>Any other competent authority (judicial or administrative) provided for by law.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">HOW LONG DO WE KEEP THE DATA?</h2>

            <p>
              The company will process personal data for the duration of the contractual relationship with the data subject or, where applicable, for as long as the data subject has validly given his or her consent. Once processing is completed, the data will be kept duly blocked for the time necessary to address potential legal liabilities arising from the processing, making it available only to the competent public authorities, judges, and courts.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">WHAT SECURITY MEASURES DO WE APPLY?</h2>

            <p>
              We implement technical and organizational measures to ensure an adequate level of security in accordance with applicable regulations.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">WHAT SECURITY MEASURES DO WE APPLY FOR THE USE OF ARTIFICIAL INTELLIGENCE?</h2>

            <p>
              We may use artificial intelligence technology, such as chatbots supported by powerful language models, as part of our operations. In doing so, we maintain full control over your data and guarantee that it will not be shared with third parties for the purpose of training AI models.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">WHAT RIGHTS DO YOU HAVE AND HOW TO EXERCISE THEM?</h2>

            <p>
              You may request access to your personal data, its rectification or deletion, portability, or restriction of its processing, or you may object to its processing, by contacting Zenvi (using the contact information provided at the beginning of this Privacy Policy).
            </p>

            <p>
              Regarding consent-based processing, you may withdraw your consent at any time. You also have the right to lodge a complaint with the Spanish Data Protection Agency (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>).
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">REVIEW AND UPDATE</h2>

            <p>
              This Privacy Policy is reviewed and updated annually.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
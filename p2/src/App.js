import Para from "./Para";
import Heading from './Heading';
import "./style.css";
function App() {
  return (
    <div className="container">
    <img src="https://image.flaticon.com/icons/png/128/4252/4252365.png" alt=""/>
    <div className="App">
    <Heading head="Terms & Uses"/>
    <hr className="l1"/>
    <Para content="We value the trust you place in us and recognize the importance of secure transactions and information privacy. This Privacy 
            Policy describes how DevsKart Internet Private Limited and its affiliates (collectively “DevsKart, we, our, us”) collect, use,
             share or otherwise process your personal information through DevsKart website www.DevsKart.com, its mobile application, and m-site
            (hereinafter referred to as the “Platform”)."/>
      <hr className="l1"/>

      {/* <Heading head="Thank you for using 8bitCart!!" className="t1"/> */}
      <h2>Thank you for using DevsKart!!</h2>
      <Para content="DevsKart offers products and services provided by DevsKart, Inc., our subsidiaries, and our international branches (DevsKart, us, we, or our). These Terms of Use (Terms) govern your use of our website, apps, and other products and services (Services)."/>
     

      <h2>Content Offerings:</h2>
      <ul className="t2">
        <li><b>Changes to Content Offerings:</b> DevsKart offers courses and content ("Content Offerings") from universities and other providers ("Content Providers"). While we seek to provide world-class Content Offerings from our Content Providers, unexpected events do occur</li>
        <li><b>No Academic Credit:</b>Unless otherwise explicitly indicated by a credit-granting institution, participation in or completion of Content Offerings does not confer any academic credit. Even if credit is awarded by one institution, there is no presumption that other institutions will accept that credit.</li>
        <li><b>Disclaimer of Student-Content Provider Relationship:</b>
        Except as described in the Degree and MasterTrack Certificate Programs section below, nothing in these Terms or otherwise with respect to your participation in any Content Offerings by Content Providers.
        </li>
      </ul>
    

      <h2>Your Content</h2>
      <ul className="t2">
        <li><b>User Content:</b> The Services enable you to share your content, such as homework, quizzes, exams, projects, other assignments you submit, posts you make in the forums, and the like ("User Content"), with DevsKart, instructors, and/or other users.</li>
        <li><b>How DevsKart and Others May Use User Content:</b>
        To the extent that you provide User Content, you grant DevsKart a fully-transferable, royalty-free, perpetual, sublicensable, non-exclusive, worldwide license to copy, distribute, modify, create derivative works based on, publicly perform, publicly display, and otherwise use the User Content. 
        </li>
        <li><b>Feedback:</b>
        We welcome your suggestions, ideas, comments, and other feedback regarding the Services ("Feedback"). By submitting any Feedback, you grant us the right to use the Feedback without any restriction or any compensation to you. 
        </li>
      </ul>
      


      <h2>Security</h2>
      <Para content="We care about the security of our users. While we work to protect the security of your account and related information, DevsKart cannot guarantee that unauthorized third parties will not be able to defeat our security measures. "/>
    


      <h2>Copyright and Trademark</h2>
      <Para content="DevsKart respects the intellectual property rights of our users, Content Providers, and other third parties and expects our users to do the same when using the Services. We have adopted and implemented the DevsKart Copyright and Trademark Policy below in accordance with applicable law, including the Digital Millennium Copyright Act."/>
      



      <h2>Education Research</h2>
      <Para content="DevsKart is committed to advancing the science of learning and teaching, and records of your participation in courses may be used for education research. In the interest of this research, you may be exposed to variations in the Content Offerings. Research findings will typically be reported at the aggregate level. Your personal identity will not be publicly disclosed in any research findings without your express consent."/>
      



      <h2>Disclaimers</h2>
      <Para content="THE SERVICES AND ALL INCLUDED CONTENT ARE PROVIDED ON AN AS IS BASIS WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS OR IMPLIED. THE DevsKart PARTIES SPECIFICALLY DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. "/>
  


      <h2>Indemnification</h2>
      <Para content="You agree to indemnify, defend, and hold harmless the DevsKart Parties from any and all claims, liabilities, expenses, and damages, including reasonable attorneys' fees and costs, made by any third party related to: (a) your use or attempted use of the Services in violation of these Terms; (b) your violation of any law or rights of any third party."/>
    


      <h2>General Terms</h2>
      <ul className="t2">
        <li>
        <b>Content Providers</b>
        <Para content="Our Content Providers and integrated service providers are third party beneficiaries of the Terms and may enforce those provisions of the Terms that relate to them."/>
        </li>

        <li>
        <b>Severability:</b>
        <Para content="If it turns out that a particular provision of these Terms is not enforceable, this will not affect any other terms. If you do not comply with these Terms, and we do not take immediate action, this does not indicate that we relinquish any rights that we may have (such as taking action in the future)."/>
        </li>

        <li>
        <b>Revisions to the Terms:</b>
        <Para content="We reserve the right to revise the Terms at our sole discretion at any time. Any revisions to the Terms will be effective immediately upon posting by us. For any material changes to the Terms, we will take reasonable steps to notify you of such changes, via a banner on the website, email notification, another method, or combination of methods. In all cases, your continued use of the Services after publication of such changes, with or without notification, constitutes binding acceptance of the revised Terms."/>
        </li>
        <li>
        <b>Notice for California Users:</b>
        <Para content="Under California Civil Code Section 1789.3, California website users are entitled to the following specific consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs may be contacted in writing at 1625 N. Market Blvd., Suite S-202, Sacramento, California 95834, or by telephone at (800) 952-5210."/>
        </li>
      </ul>
      <hr className="l1"/>
      <Heading head=""/>
      <hr className="l1"/>
    </div>
</div>
  );
}

export default App;

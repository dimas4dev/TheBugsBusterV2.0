import React from "react";

import Header from "../header/Header";
import Layout from "../Layout";
import Footer from "../footer/Footer";
import headerBackground from "../../assets/images/BannerJob.jpeg";
import companyLogo from "../../assets/images/oracleLogo.jpeg";
import "../../assets/styles/components/jobPage/JobPage.scss";

const JobPage = () => {
  return (
    <React.Fragment>
      <Header bgImage={headerBackground}>
        <div className="header__job-position">
          <h1>Data Analist</h1>
          <button>Apply for this job</button>
        </div>
      </Header>
      <Layout>
        <article>
          <h4>Description</h4>
          <img src={companyLogo} alt="company logo" />

          <p>
            Greater New York Mutual Insurance Company (""GNY"") is an A+ rated, financially stable and growing property casualty insurance company
            with locations throughout the Northeast. We are currently looking for a dynamic and highly motivated Data Engineer for our New York office
          </p>
        </article>
        <article>
          <h4>Responsibilities</h4>
          <p>
            Develop, construct, test, and maintain architectures, such as databases and analytic environments and platform required for structured,
            semi-structured and unstructured data. Design and develop data pipelines that deliver accurate, consistent, and traceable datasets for
            data science projects. Support regular and ad-hoc data needs for data scientists. Provide recommendations and implement ways to improve
            data reliability, efficiency, and quality.
          </p>
        </article>
        <article>
          <h4>Qualifications</h4>
          <p>
            Bachelor's or Master's degree obtained from an accredited institution preferably in Computer Science, Computer Engineering, and Software
            Engineering, Data Science, or a related field. 3-5 years of professional experience in data science or related field. Experience in
            database deployment and management and proficient in SQL. Experience in data warehousing and ETL (Extract, Transform, and Load) Proficient
            in R, Python, VBA, Excel and Word. Excellent oral and written communication
          </p>
        </article>
        <article>
          <h4>Required Skills / knowledge</h4>
          <p>
            5+ years of experience developing Big Data and/or machine learning solutions. Experience with a modern cloud platform, such as AWS,
            Microsoft Azure, GCP, etc. Experience with SQL, NoSQL, BigData and Graph Technologies along with Programming languages like R, Python,
            Kafka, Storm etc. Experience building microservices. Background in Agile SW development and scaled Agile Frameworks. A true believer in
            measuring success based on working software and in quick prototyping. Someone who is a passionate coder and can spin up a snippet of code
            quickly. Strategic thinker with the ability to build and execute innovative digital products, combined with tactical ability to execute
            simultaneously against multiple contending priorities. Someone with an iterative approach, drive to move fast and think big. Demonstrated
            ability to partner and communicate effectively with non-technical team members, resolving contending or contradictory objectives, and
            unifying disparate ideas into a homogenized solution.
          </p>
        </article>
        <article>
          <div>
            <h4>Technologies and Tools:</h4>
            <p>
              Oracle 11g/12c, Toad for Oracle, Linux, Putty, GitHub, Rally, Nice to have: Informatica, Python, Aurora, and Hive in sprint planning,
              design, coding, unit testing, and sprint reviews. Our generous
            </p>
          </div>
          <div>
            <h4>Requirements</h4>
            <div>
              <p>Java Script</p>
              <p>Angular</p>
              <p>GraphQl</p>
              <p>Sass</p>
              <p>MySQL</p>
              <p>Shell</p>
              <p>PostgreSQL</p>
              <p>React/React Native</p>
              <p>Front-End</p>
              <p>Webpack</p>
              <p>Spark SQL</p>
              <p>Python</p>
            </div>
          </div>
        </article>
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default JobPage;

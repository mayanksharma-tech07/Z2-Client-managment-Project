import React from 'react'
import { Form, Input, Button } from 'antd'
import './Home.css'

function Home() {

  // ================= CONTACT FORM =================

  function handleContact(e) {

    const oldData =
      JSON.parse(localStorage.getItem('contactData')) || []

    oldData.push(e)

    localStorage.setItem(
      'contactData',
      JSON.stringify(oldData)
    )

    alert('Your message has been submitted successfully')
  }


  return (

    <div className="single-page">

      {/* =====================================================
                          NAVBAR
      ===================================================== */}

      <nav className="navbar">

        <div className="navbar-logo">

          <img
            src="/yashvitechh.png"
            alt="YashviTech"
          />

        </div>


        <div className="navbar-links">

          <a href="#home">
            <span>01</span>
            Home
          </a>

          <a href="#about">
            <span>02</span>
            About
          </a>

          <a href="#features">
            <span>03</span>
            Features
          </a>

          <a href="#clients">
            <span>04</span>
            Clients
          </a>

          <a href="#faq">
            <span>05</span>
            FAQ
          </a>

          <a href="#contact">
            <span>06</span>
            Contact
          </a>

        </div>


        <a
          href="#contact"
          className="navbar-button"
        >
          Get Started
          <span>↗</span>
        </a>

      </nav>



      {/* =====================================================
                          HOME SECTION
      ===================================================== */}

      <section
        id="home"
        className="home-section"
      >

        <div className="home-left">

          <div className="home-badge">

            <span className="badge-dot"></span>

            SMART CLIENT MANAGEMENT

          </div>


          <h1>

            Build Stronger
            <br />

            <span>Client Relationships.</span>

            <br />

            Grow Your Business.

          </h1>


          <p className="home-text">

            A powerful client management system designed to help
            businesses organize client information, track
            relationships, manage communication, monitor
            activities and build stronger long-term connections.

          </p>


          <div className="home-actions">

            <a
              href="#clients"
              className="home-main-btn"
            >

              Explore Clients

              <span>↗</span>

            </a>


            <a
              href="#about"
              className="home-outline-btn"
            >

              Discover More

            </a>

          </div>


          <div className="home-trust">

            <div className="trust-avatars">

              <div>MK</div>
              <div>RS</div>
              <div>AK</div>
              <div>+</div>

            </div>


            <div className="trust-content">

              <strong>
                Trusted Client Management
              </strong>

              <span>
                Built for modern businesses
              </span>

            </div>

          </div>

        </div>



        <div className="home-right">

          <div className="hero-glow"></div>


          <div className="hero-image-box">

            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=90"
              alt="Client Management"
            />

            <div className="image-overlay"></div>


            {/* TOP CARD */}

            <div className="hero-top-card">

              <div className="top-card-icon">
                ✓
              </div>


              <div>

                <span>
                  Client Status
                </span>

                <strong>
                  All Clients Active
                </strong>

              </div>


              <div className="online-dot"></div>

            </div>



            {/* CLIENT CARD */}

            <div className="hero-stock-card">

              <span>
                Total Clients
              </span>


              <div className="stock-number">
                1,248
              </div>


              <div className="stock-growth">

                <span>
                  ↗ 12.8%
                </span>

                <small>
                  vs last month
                </small>

              </div>

            </div>



            {/* BOTTOM CARD */}

            <div className="hero-bottom-card">

              <div className="bottom-title">

                <span>
                  Client Activity
                </span>

                <small>
                  Today
                </small>

              </div>


              <div className="stock-bars">

                <div className="bar bar-one"></div>
                <div className="bar bar-two"></div>
                <div className="bar bar-three"></div>
                <div className="bar bar-four"></div>
                <div className="bar bar-five"></div>
                <div className="bar bar-six"></div>
                <div className="bar bar-seven"></div>

              </div>


              <div className="stock-labels">

                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>

              </div>

            </div>

          </div>



          <div className="products-added-card">

            <div className="product-mini-icon">
              👥
            </div>


            <div className="product-mini-content">

              <span>
                New Clients
              </span>

              <strong>
                +36 Today
              </strong>

            </div>

          </div>

        </div>



        {/* HOME STATS */}

        <div className="home-bottom-stats">

          <div className="stat-item">

            <strong>
              10K+
            </strong>

            <span>
              Clients Managed
            </span>

          </div>


          <div className="stat-line"></div>


          <div className="stat-item">

            <strong>
              99.9%
            </strong>

            <span>
              Data Reliability
            </span>

          </div>


          <div className="stat-line"></div>


          <div className="stat-item">

            <strong>
              24/7
            </strong>

            <span>
              Client Access
            </span>

          </div>


          <div className="stat-line"></div>


          <div className="stat-item">

            <strong>
              Smart
            </strong>

            <span>
              Business Insights
            </span>

          </div>

        </div>

      </section>



      {/* =====================================================
                          ABOUT SECTION
      ===================================================== */}

      <section
        id="about"
        className="about-section"
      >

        <div className="about-image-area">

          <div className="about-main-image">

            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=90"
              alt="Client Meeting"
            />

          </div>


          <div className="about-small-image">

            <img
               src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=90"
              alt="Business Management"
            />

          </div>


          <div className="about-experience-card">

            <strong>
              01
            </strong>

            <div>

              <span>
                Powerful
              </span>

              <small>
                Client Management
              </small>

            </div>

          </div>


          <div className="about-circle">

            <span>
              SMART
            </span>

            <strong>
              CLIENTS
            </strong>

          </div>

        </div>



        <div className="about-content">

          <div className="about-tag">

            <span></span>

            ABOUT CLIENT MANAGEMENT

          </div>


          <h2>

            Everything Your
            <br />

            Business Needs To
            <br />

            <span>Manage Clients Better.</span>

          </h2>


          <p className="about-intro">

            Our Client Management System is a modern
            business solution created to simplify the way
            organizations manage their clients, contacts,
            communication and relationships.

          </p>


          <p className="about-description">

            Instead of maintaining client information across
            spreadsheets, notebooks, emails and multiple
            disconnected platforms, businesses can maintain
            important client data inside one centralized
            workspace. This makes client handling faster,
            organized and more professional.

          </p>



          <div className="about-features">

            <div className="about-feature">

              <div className="feature-icon">
                ◈
              </div>

              <div>

                <h3>
                  Centralized Client Data
                </h3>

                <p>

                  Keep client profiles, contact information,
                  business details and important records
                  organized in one secure workspace.

                </p>

              </div>

            </div>



            <div className="about-feature">

              <div className="feature-icon">
                ◇
              </div>

              <div>

                <h3>
                  Better Relationship Visibility
                </h3>

                <p>

                  Quickly understand client activity,
                  communication history, current status
                  and important relationship information.

                </p>

              </div>

            </div>



            <div className="about-feature">

              <div className="feature-icon">
                ↗
              </div>

              <div>

                <h3>
                  Business Efficiency
                </h3>

                <p>

                  Reduce repetitive manual work and give
                  your team a structured way to manage
                  daily client operations.

                </p>

              </div>

            </div>

          </div>


          <a
            href="#features"
            className="about-button"
          >

            Explore Features

            <span>↗</span>

          </a>

        </div>



        <div className="about-bottom">

          <div>

            <strong>01</strong>

            <span>
              Organized Clients
            </span>

          </div>


          <div>

            <strong>02</strong>

            <span>
              Better Communication
            </span>

          </div>


          <div>

            <strong>03</strong>

            <span>
              Strong Relationships
            </span>

          </div>


          <div>

            <strong>04</strong>

            <span>
              Complete Control
            </span>

          </div>

        </div>

      </section>



      {/* =====================================================
                        FEATURES SECTION
      ===================================================== */}

      <section
        id="features"
        className="features-section"
      >

        <div className="features-header">

          <div className="features-heading">

            <div className="features-tag">

              <span></span>

              POWERFUL FEATURES

            </div>


            <h2>

              Everything You Need
              <br />

              To Manage <span>Smarter.</span>

            </h2>

          </div>


          <p className="features-intro">

            From client onboarding and contact management
            to communication tracking, business insights
            and relationship monitoring, our platform brings
            essential client-management capabilities together
            inside one organized system.

          </p>

        </div>



        <div className="features-grid">

          {/* FEATURE 01 */}

          <div className="feature-card feature-large">

            <div className="feature-card-top">

              <div className="feature-number">
                01
              </div>

              <div className="feature-card-icon">
                ◈
              </div>

            </div>


            <div className="feature-card-content">

              <h3>
                Smart Client Tracking
              </h3>

              <p>

                Maintain a complete overview of every
                client. Track client profiles, relationship
                status, business category, communication
                history and important activities from one
                centralized workspace.

              </p>

            </div>



            <div className="inventory-mini-ui">

              <div className="mini-ui-header">

                <span>
                  Client Overview
                </span>

                <small>
                  Live
                </small>

              </div>


              <div className="mini-stock-row">

                <span>
                  Active Clients
                </span>

                <div className="mini-progress">

                  <div className="progress-one"></div>

                </div>

                <strong>
                  86%
                </strong>

              </div>


              <div className="mini-stock-row">

                <span>
                  Follow-ups
                </span>

                <div className="mini-progress">

                  <div className="progress-two"></div>

                </div>

                <strong>
                  64%
                </strong>

              </div>


              <div className="mini-stock-row">

                <span>
                  Retention
                </span>

                <div className="mini-progress">

                  <div className="progress-three"></div>

                </div>

                <strong>
                  92%
                </strong>

              </div>

            </div>

          </div>



          {/* FEATURE 02 */}

          <div className="feature-card">

            <div className="feature-card-top">

              <div className="feature-number">
                02
              </div>

              <div className="feature-card-icon">
                ↗
              </div>

            </div>


            <h3>
              Real-Time Client Insights
            </h3>


            <p>

              Get a clearer picture of your client
              relationships through useful statistics,
              activity information and visual business
              indicators.

            </p>


            <div className="insight-chart">

              <div className="chart-line line-one"></div>
              <div className="chart-line line-two"></div>
              <div className="chart-line line-three"></div>
              <div className="chart-line line-four"></div>
              <div className="chart-line line-five"></div>

            </div>


            <div className="chart-label">

              <span>
                Client engagement
              </span>

              <strong>
                +18.4%
              </strong>

            </div>

          </div>



          {/* FEATURE 03 */}

          <div className="feature-card">

            <div className="feature-card-top">

              <div className="feature-number">
                03
              </div>

              <div className="feature-card-icon">
                !
              </div>

            </div>


            <h3>
              Follow-Up Alerts
            </h3>


            <p>

              Never lose track of important client
              conversations, scheduled follow-ups,
              pending responses or relationship
              opportunities.

            </p>


            <div className="alert-ui">

              <div className="alert-item">

                <div className="alert-dot"></div>

                <div>

                  <strong>
                    Rahul Industries
                  </strong>

                  <span>
                    Follow-up due today
                  </span>

                </div>

                <small>
                  HIGH
                </small>

              </div>


              <div className="alert-item">

                <div className="alert-dot"></div>

                <div>

                  <strong>
                    Apex Solutions
                  </strong>

                  <span>
                    Response pending
                  </span>

                </div>

                <small>
                  WATCH
                </small>

              </div>

            </div>

          </div>



          {/* FEATURE 04 */}

          <div className="feature-card">

            <div className="feature-card-top">

              <div className="feature-number">
                04
              </div>

              <div className="feature-card-icon">
                #
              </div>

            </div>


            <h3>
              Client Organization
            </h3>


            <p>

              Keep client information structured using
              categories, industries, relationship status,
              account type and important business details.

            </p>


            <div className="category-ui">

              <div>

                <span>
                  Enterprise
                </span>

                <strong>
                  124
                </strong>

              </div>


              <div>

                <span>
                  Startups
                </span>

                <strong>
                  86
                </strong>

              </div>


              <div>

                <span>
                  Businesses
                </span>

                <strong>
                  218
                </strong>

              </div>

            </div>

          </div>



          {/* FEATURE 05 */}

          <div className="feature-card feature-wide">

            <div className="feature-wide-content">

              <div className="feature-card-top">

                <div className="feature-number">
                  05
                </div>

                <div className="feature-card-icon">
                  ◇
                </div>

              </div>


              <h3>
                Centralized Business Control
              </h3>


              <p>

                Manage client information, relationship
                activities, follow-ups and communication
                from a single organized system. Reduce
                manual work and make important client
                information available whenever your team
                needs it.

              </p>

            </div>



            <div className="control-ui">

              <div className="control-circle">

                <span>
                  CLIENTS
                </span>

                <strong>
                  92%
                </strong>

                <small>
                  Healthy
                </small>

              </div>


              <div className="control-stats">

                <div>

                  <strong>
                    1,248
                  </strong>

                  <span>
                    Clients
                  </span>

                </div>


                <div>

                  <strong>
                    326
                  </strong>

                  <span>
                    Leads
                  </span>

                </div>


                <div>

                  <strong>
                    98%
                  </strong>

                  <span>
                    Accuracy
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>



        <div className="features-bottom">

          <div>

            <strong>
              01
            </strong>

            <span>
              Track Everyone
            </span>

          </div>


          <div>

            <strong>
              02
            </strong>

            <span>
              Understand Data
            </span>

          </div>


          <div>

            <strong>
              03
            </strong>

            <span>
              Never Miss Follow-ups
            </span>

          </div>


          <div>

            <strong>
              04
            </strong>

            <span>
              Grow Relationships
            </span>

          </div>

        </div>

      </section>



      {/* =====================================================
                          CLIENT SECTION
      ===================================================== */}

      <section
        id="clients"
        className="inventory-section"
      >

        <div className="inventory-header">

          <div>

            <div className="inventory-tag">

              <span></span>

              CLIENT OVERVIEW

            </div>


            <h2>

              Your Clients.
              <br />

              <span>Your Relationships.</span>

            </h2>

          </div>


          <p>

            Monitor your clients, relationship status,
            communication activity and business performance
            from one clean and organized workspace.

          </p>

        </div>



        <div className="inventory-dashboard">

          {/* DASHBOARD TOP */}

          <div className="dashboard-top">

            <div>

              <span>
                Overview
              </span>

              <h3>
                Client Dashboard
              </h3>

            </div>


            <div className="dashboard-date">

              <span>
                ●
              </span>

              Live Clients

            </div>

          </div>



          {/* STATISTICS */}

          <div className="inventory-stats">

            <div className="inventory-stat-card">

              <div className="stat-icon">
                ◈
              </div>

              <div>

                <span>
                  Total Clients
                </span>

                <strong>
                  1,248
                </strong>

              </div>

              <small>
                +12.8%
              </small>

            </div>



            <div className="inventory-stat-card">

              <div className="stat-icon">
                ◇
              </div>

              <div>

                <span>
                  Active Clients
                </span>

                <strong>
                  1,096
                </strong>

              </div>

              <small>
                +8.4%
              </small>

            </div>



            <div className="inventory-stat-card">

              <div className="stat-icon">
                !
              </div>

              <div>

                <span>
                  Follow-ups
                </span>

                <strong>
                  86
                </strong>

              </div>

              <small className="warning-text">
                Attention
              </small>

            </div>



            <div className="inventory-stat-card">

              <div className="stat-icon">
                ↗
              </div>

              <div>

                <span>
                  Categories
                </span>

                <strong>
                  24
                </strong>

              </div>

              <small>
                +4 new
              </small>

            </div>

          </div>



          {/* MAIN GRID */}

          <div className="inventory-main-grid">

            {/* CLIENTS */}

            <div className="products-panel">

              <div className="panel-heading">

                <div>

                  <span>
                    CLIENTS
                  </span>

                  <h3>
                    Recent Clients
                  </h3>

                </div>


                <button>
                  View All →
                </button>

              </div>



              <div className="product-table">

                <div className="product-table-head">

                  <span>
                    Client
                  </span>

                  <span>
                    Category
                  </span>

                  <span>
                    Activity
                  </span>

                  <span>
                    Status
                  </span>

                </div>



                {/* CLIENT 01 */}

                <div className="product-row">

                  <div className="product-info">

                    <div className="product-image">

                      <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="Client"
                      />

                    </div>


                    <div>

                      <strong>
                        Rahul Industries
                      </strong>

                      <span>
                        CLT-00124
                      </span>

                    </div>

                  </div>


                  <span className="product-category">
                    Enterprise
                  </span>


                  <strong className="product-stock">
                    24
                  </strong>


                  <span className="status available">
                    Active
                  </span>

                </div>



                {/* CLIENT 02 */}

                <div className="product-row">

                  <div className="product-info">

                    <div className="product-image">

                      <img
                        src="https://i.pravatar.cc/150?img=32"
                        alt="Client"
                      />

                    </div>


                    <div>

                      <strong>
                        Apex Solutions
                      </strong>

                      <span>
                        CLT-00281
                      </span>

                    </div>

                  </div>


                  <span className="product-category">
                    Technology
                  </span>


                  <strong className="product-stock">
                    18
                  </strong>


                  <span className="status available">
                    Active
                  </span>

                </div>



                {/* CLIENT 03 */}

                <div className="product-row">

                  <div className="product-info">

                    <div className="product-image">

                      <img
                        src="https://i.pravatar.cc/150?img=47"
                        alt="Client"
                      />

                    </div>


                    <div>

                      <strong>
                        Vision Creative
                      </strong>

                      <span>
                        CLT-00319
                      </span>

                    </div>

                  </div>


                  <span className="product-category">
                    Creative
                  </span>


                  <strong className="product-stock">
                    12
                  </strong>


                  <span className="status low-stock">
                    Follow-up
                  </span>

                </div>



                {/* CLIENT 04 */}

                <div className="product-row">

                  <div className="product-info">

                    <div className="product-image">

                      <img
                        src="https://i.pravatar.cc/150?img=56"
                        alt="Client"
                      />

                    </div>


                    <div>

                      <strong>
                        Digital Works
                      </strong>

                      <span>
                        CLT-00412
                      </span>

                    </div>

                  </div>


                  <span className="product-category">
                    Digital
                  </span>


                  <strong className="product-stock">
                    31
                  </strong>


                  <span className="status available">
                    Active
                  </span>

                </div>

              </div>

            </div>



            {/* SIDE PANEL */}

            <div className="inventory-side-panel">

              <div className="panel-heading">

                <div>

                  <span>
                    CLIENT HEALTH
                  </span>

                  <h3>
                    Overview
                  </h3>

                </div>


                <span className="health-dot">
                  ●
                </span>

              </div>


              <div className="stock-circle">

                <div>

                  <strong>
                    92%
                  </strong>

                  <span>
                    Healthy
                  </span>

                </div>

              </div>


              <div className="health-info">

                <div>

                  <span>
                    Active Clients
                  </span>

                  <strong>
                    1,096
                  </strong>

                </div>


                <div>

                  <span>
                    Follow-ups
                  </span>

                  <strong>
                    86
                  </strong>

                </div>


                <div>

                  <span>
                    Inactive
                  </span>

                  <strong>
                    66
                  </strong>

                </div>

              </div>

            </div>

          </div>



          {/* BOTTOM ANALYTICS */}

          <div className="inventory-bottom">

            <div className="inventory-chart-panel">

              <div className="panel-heading">

                <div>

                  <span>
                    PERFORMANCE
                  </span>

                  <h3>
                    Client Activity
                  </h3>

                </div>


                <span className="chart-growth">
                  +18.4%
                </span>

              </div>


              <div className="bar-chart">

                <div className="chart-bar bar-one">
                  <span></span>
                </div>

                <div className="chart-bar bar-two">
                  <span></span>
                </div>

                <div className="chart-bar bar-three">
                  <span></span>
                </div>

                <div className="chart-bar bar-four">
                  <span></span>
                </div>

                <div className="chart-bar bar-five">
                  <span></span>
                </div>

                <div className="chart-bar bar-six">
                  <span></span>
                </div>

                <div className="chart-bar bar-seven">
                  <span></span>
                </div>

              </div>


              <div className="chart-days">

                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>

              </div>

            </div>



            {/* QUICK ACTIONS */}

            <div className="quick-panel">

              <div className="panel-heading">

                <div>

                  <span>
                    QUICK ACTIONS
                  </span>

                  <h3>
                    Manage Clients
                  </h3>

                </div>

              </div>


              <div className="quick-actions">

                <div className="quick-action">

                  <div>
                    +
                  </div>

                  <span>
                    Add Client
                  </span>

                  <strong>
                    →
                  </strong>

                </div>


                <div className="quick-action">

                  <div>
                    ◇
                  </div>

                  <span>
                    Client Categories
                  </span>

                  <strong>
                    →
                  </strong>

                </div>


                <div className="quick-action">

                  <div>
                    !
                  </div>

                  <span>
                    Check Follow-ups
                  </span>

                  <strong>
                    →
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </div>



        <div className="inventory-bottom-text">

          <span>
            CLIENTLY
          </span>

          <p>
            Better client management starts with better relationships.
          </p>

        </div>

      </section>



      {/* =====================================================
                          FAQ SECTION
      ===================================================== */}

      <section
        id="faq"
        className="faq-section"
      >

        <div className="faq-header">

          <div className="faq-heading">

            <div className="faq-tag">

              <span></span>

              FREQUENTLY ASKED QUESTIONS

            </div>


            <h2>

              Everything You
              <br />

              Need To <span>Know.</span>

            </h2>

          </div>


          <p className="faq-intro">

            Find clear answers to common questions about
            client management, customer relationships,
            communication tracking, follow-ups and how
            a centralized client system can help your
            business operate more efficiently.

          </p>

        </div>



        <div className="faq-main">

          {/* LEFT SIDE */}

          <div className="faq-left">

            <div className="faq-info-card">

              <div className="faq-info-top">

                <div className="faq-info-icon">
                  ?
                </div>

                <span>
                  NEED MORE HELP?
                </span>

              </div>


              <h3>

                Still have
                <br />

                questions?

              </h3>


              <p>

                Our support team is ready to help you
                understand the client management platform
                and find the right solution for your business
                relationship-management requirements.

              </p>


              <a
                href="#contact"
                className="faq-contact-btn"
              >

                Talk To Our Team

                <span>
                  ↗
                </span>

              </a>

            </div>



            <div className="faq-mini-stats">

              <div>

                <strong>
                  24/7
                </strong>

                <span>
                  Access
                </span>

              </div>


              <div>

                <strong>
                  99.9%
                </strong>

                <span>
                  Reliability
                </span>

              </div>


              <div>

                <strong>
                  100%
                </strong>

                <span>
                  Visibility
                </span>

              </div>

            </div>

          </div>



          {/* RIGHT SIDE */}

          <div className="faq-list">

            {/* FAQ 01 */}

            <details
              className="faq-item"
              open
            >

              <summary>

                <div className="faq-question">

                  <span className="faq-number">
                    01
                  </span>

                  <h3>
                    What is a Client Management System?
                  </h3>

                </div>


                <div className="faq-toggle">
                  +
                </div>

              </summary>


              <div className="faq-answer">

                <p>

                  A Client Management System is a centralized
                  platform that helps businesses organize client
                  information, contact details, communication
                  history, follow-ups, relationship status and
                  other important business records in one place.

                </p>

              </div>

            </details>



            {/* FAQ 02 */}

            <details className="faq-item">

              <summary>

                <div className="faq-question">

                  <span className="faq-number">
                    02
                  </span>

                  <h3>
                    How does client management help a business?
                  </h3>

                </div>


                <div className="faq-toggle">
                  +
                </div>

              </summary>


              <div className="faq-answer">

                <p>

                  It helps businesses maintain organized client
                  information, reduce manual work, improve
                  communication, manage follow-ups and get a
                  clearer understanding of customer relationships.
                  This allows teams to respond faster and provide
                  a more professional client experience.

                </p>

              </div>

            </details>



            {/* FAQ 03 */}

            <details className="faq-item">

              <summary>

                <div className="faq-question">

                  <span className="faq-number">
                    03
                  </span>

                  <h3>
                    Can I track client follow-ups?
                  </h3>

                </div>


                <div className="faq-toggle">
                  +
                </div>

              </summary>


              <div className="faq-answer">

                <p>

                  Yes. The system is designed to make pending
                  conversations, follow-ups and client activities
                  easier to identify. This helps teams avoid
                  missing important communication opportunities
                  and maintain stronger client relationships.

                </p>

              </div>

            </details>



            {/* FAQ 04 */}

            <details className="faq-item">

              <summary>

                <div className="faq-question">

                  <span className="faq-number">
                    04
                  </span>

                  <h3>
                    Can client information be managed centrally?
                  </h3>

                </div>


                <div className="faq-toggle">
                  +
                </div>

              </summary>


              <div className="faq-answer">

                <p>

                  Yes. Client details, contact information,
                  business categories, relationship status,
                  communication records and other important
                  information can be maintained inside one
                  structured workspace instead of being scattered
                  across different files and applications.

                </p>

              </div>

            </details>



            {/* FAQ 05 */}

            <details className="faq-item">

              <summary>

                <div className="faq-question">

                  <span className="faq-number">
                    05
                  </span>

                  <h3>
                    Does the system provide client insights?
                  </h3>

                </div>


                <div className="faq-toggle">
                  +
                </div>

              </summary>


              <div className="faq-answer">

                <p>

                  The platform can provide useful client statistics,
                  activity information and relationship indicators
                  that help businesses understand customer engagement,
                  identify opportunities and make better business
                  decisions.

                </p>

              </div>

            </details>



            {/* FAQ 06 */}

            <details className="faq-item">

              <summary>

                <div className="faq-question">

                  <span className="faq-number">
                    06
                  </span>

                  <h3>
                    Who can benefit from client management?
                  </h3>

                </div>


                <div className="faq-toggle">
                  +
                </div>

              </summary>


              <div className="faq-answer">

                <p>

                  Client management can benefit agencies,
                  service companies, startups, consultants,
                  sales teams, marketing teams, growing
                  businesses and organizations that regularly
                  communicate with customers or business clients.

                </p>

              </div>

            </details>

          </div>

        </div>



        <div className="faq-bottom">

          <div>

            <strong>
              01
            </strong>

            <span>
              Clear Answers
            </span>

          </div>


          <div>

            <strong>
              02
            </strong>

            <span>
              Smart Management
            </span>

          </div>


          <div>

            <strong>
              03
            </strong>

            <span>
              Better Relationships
            </span>

          </div>


          <div>

            <strong>
              04
            </strong>

            <span>
              Complete Support
            </span>

          </div>

        </div>

      </section>



      {/* =====================================================
                        CONTACT SECTION
      ===================================================== */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-container">

          {/* LEFT SIDE */}

          <div className="contact-content">

            <p className="contact-tag">
              GET IN TOUCH
            </p>


            <h2>

              Let's Talk About
              <br />

              Your <span>Business.</span>

            </h2>


            <p className="contact-description">

              Have questions about client management,
              customer relationships or business operations?
              Send us a message and the YashviTech team
              will get back to you.

            </p>



            <div className="contact-info">

              <div className="contact-info-card">

                <div className="contact-icon">
                  ✉
                </div>

                <div>

                  <span>
                    Email
                  </span>

                  <strong>
                    info.yashvitecch@gmail.com
                  </strong>

                </div>

              </div>



              <div className="contact-info-card">

                <div className="contact-icon">
                  ☎
                </div>

                <div>

                  <span>
                    Phone
                  </span>

                  <strong>
                    +91 86400 91593
                  </strong>

                </div>

              </div>



              <div className="contact-info-card">

                <div className="contact-icon">
                  ⌖
                </div>

                <div>

                  <span>
                    Location
                  </span>

                  <strong>
                    Near Disha College, Kota, Raipur, C.G.
                  </strong>

                </div>

              </div>

            </div>

          </div>



          {/* RIGHT SIDE FORM */}

          <div className="contact-form-card">

            <div className="form-heading">

              <span>
                CONTACT FORM
              </span>

              <h3>
                Send us a message
              </h3>

              <p>
                Fill in the details below and we'll contact you shortly.
              </p>

            </div>


            <Form
              layout="vertical"
              onFinish={handleContact}
            >

              <Form.Item
                label="Your Name"
                name="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your name'
                  }
                ]}
              >

                <Input
                  placeholder="Enter your name"
                />

              </Form.Item>



              <Form.Item
                label="Mobile Number"
                name="Mobile-no"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your mobile number'
                  }
                ]}
              >

                <Input
                  placeholder="Enter your mobile number"
                />

              </Form.Item>



              <Form.Item
                label="Address"
                name="Address"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your address'
                  }
                ]}
              >

                <Input.TextArea
                  rows={5}
                  placeholder="Enter your address"
                />

              </Form.Item>



              <Button
                htmlType="submit"
                className="contact-submit-btn"
              >

                Send Message

                <span>
                  →
                </span>

              </Button>

            </Form>

          </div>

        </div>



        <div className="contact-bottom">

          <div>

            <strong>
              01
            </strong>

            <span>
              Quick Response
            </span>

          </div>


          <div>

            <strong>
              02
            </strong>

            <span>
              Secure Data
            </span>

          </div>


          <div>

            <strong>
              03
            </strong>

            <span>
              Professional Support
            </span>

          </div>


          <div>

            <strong>
              04
            </strong>

            <span>
              Client First
            </span>

          </div>

        </div>

      </section>



      {/* =====================================================
                            FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-main">

          {/* COMPANY */}

          <div className="footer-company">

            <div className="footer-logo">

              <img
                src="/yashvitechh.png"
                alt="YashviTech"
              />

            </div>


            <p>

              Building secure, scalable and future-ready
              digital solutions for modern businesses.
              Our client management approach helps
              organizations build stronger relationships,
              improve communication and grow efficiently.

            </p>


            <a
              href="#contact"
              className="footer-button"
            >

              Get Started

              <span>
                ↗
              </span>

            </a>

          </div>



          {/* QUICK LINKS */}

          <div className="footer-column">

            <h3>
              QUICK LINKS
            </h3>


            <a href="#home">

              <span>01</span>

              Home

            </a>


            <a href="#about">

              <span>02</span>

              About

            </a>


            <a href="#features">

              <span>03</span>

              Features

            </a>


            <a href="#clients">

              <span>04</span>

              Clients

            </a>


            <a href="#contact">

              <span>05</span>

              Contact

            </a>

          </div>



          {/* FEATURES */}

          <div className="footer-column">

            <h3>
              FEATURES
            </h3>


            <a href="#features">
              Client Tracking
            </a>


            <a href="#features">
              Client Analytics
            </a>


            <a href="#features">
              Communication
            </a>


            <a href="#features">
              Follow-up Alerts
            </a>


            <a href="#features">
              Relationship Management
            </a>

          </div>



          {/* CONTACT */}

          <div className="footer-column footer-contact">

            <h3>
              GET IN TOUCH
            </h3>


            <div>

              <span>
                EMAIL
              </span>

              <strong>
                info.yashvitecch@gmail.com
              </strong>

            </div>


            <div>

              <span>
                PHONE
              </span>

              <strong>
                +91 86400 91593
              </strong>

            </div>


            <div>

              <span>
                LOCATION
              </span>

              <strong>
                Near Disha College, Kota, Raipur, C.G.
              </strong>

            </div>

          </div>

        </div>



        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">

          <p>

            © 2026
            <strong>
              YashviTech
            </strong>
            . All rights reserved.

          </p>


          <div className="footer-bottom-links">

            <a href="#home">
              Privacy
            </a>

            <a href="#home">
              Terms
            </a>

          </div>


          <p className="footer-made">

            Built for
            <span>
              smarter
            </span>
            client relationships.

          </p>

        </div>

      </footer>

    </div>

  )
}

export default Home


// import React, { useEffect, useState } from "react";
// import "./Landing.css";

// import schoolImage from "./logo.png";

// /* =====================================================
//    WORKFLOW DATA
// ===================================================== */

// const workflow = [
//   {
//     number: "01",
//     title: "Requirement Discussion",
//     text: "Sabse pehle school ke users, daily operations aur business requirements ko detail mein understand kiya jata hai.",
//     tag: "DISCOVER",
//   },
//   {
//     number: "02",
//     title: "UI / UX Planning",
//     text: "Complete user flow, dashboard structure aur responsive interface ko development se pehle carefully plan kiya jata hai.",
//     tag: "DESIGN",
//   },
//   {
//     number: "03",
//     title: "Frontend Development",
//     text: "React.js ke through fast, modern aur responsive interfaces develop kiye jate hain jo different devices par smoothly work karein.",
//     tag: "BUILD",
//   },
//   {
//     number: "04",
//     title: "Backend & API",
//     text: "Python backend, APIs aur database ke through authentication, business logic aur data management implement hota hai.",
//     tag: "CONNECT",
//   },
//   {
//     number: "05",
//     title: "Testing & Security",
//     text: "Application ke features, forms, validations, permissions aur responsive behaviour ko thoroughly test kiya jata hai.",
//     tag: "VERIFY",
//   },
//   {
//     number: "06",
//     title: "Deployment & Support",
//     text: "Final application ko production environment mein deploy karke future updates aur support ke liye ready kiya jata hai.",
//     tag: "LAUNCH",
//   },
// ];

// /* =====================================================
//    MODULE DATA
// ===================================================== */

// const modules = [
//   {
//     icon: "ST",
//     number: "01",
//     title: "Student Management",
//     text: "Student profiles, admission details, documents, academic records aur complete student information ek organized system mein.",
//     features: ["Admissions", "Profiles", "Documents"],
//   },
//   {
//     icon: "AT",
//     number: "02",
//     title: "Attendance",
//     text: "Daily attendance, monthly records aur attendance reports ko simple dashboard ke through manage kiya ja sakta hai.",
//     features: ["Daily Entry", "Reports", "Analytics"],
//   },
//   {
//     icon: "FE",
//     number: "03",
//     title: "Fees Management",
//     text: "Fee collection, pending payments, receipts aur payment records ko organized way mein maintain karne ke liye.",
//     features: ["Collection", "Receipts", "Pending"],
//   },
//   {
//     icon: "EX",
//     number: "04",
//     title: "Examination",
//     text: "Exam schedules, marks entry, results aur student performance ko efficiently manage karne ke liye dedicated module.",
//     features: ["Schedule", "Marks", "Results"],
//   },
//   {
//     icon: "TT",
//     number: "05",
//     title: "Timetable",
//     text: "Classes, teachers, subjects aur periods ko manage karne ke liye structured timetable workflow.",
//     features: ["Classes", "Subjects", "Teachers"],
//   },
//   {
//     icon: "NT",
//     number: "06",
//     title: "Notice & Updates",
//     text: "Important school announcements, notices aur updates ko different users tak easily communicate karne ke liye.",
//     features: ["Notices", "Events", "Updates"],
//   },
//   {
//     icon: "CM",
//     number: "07",
//     title: "Communication",
//     text: "School, teachers, students aur parents ke beech important information share karne ke liye connected communication flow.",
//     features: ["Parents", "Teachers", "Students"],
//   },
//   {
//     icon: "RP",
//     number: "08",
//     title: "Reports & Insights",
//     text: "Management ko useful information quickly understand karne ke liye reports aur data-based insights.",
//     features: ["Reports", "KPIs", "Insights"],
//   },
// ];

// /* =====================================================
//    REVIEWS DATA
// ===================================================== */

// const reviews = [
//   {
//     quote:
//       "The development process was clear from requirement discussion to final delivery. Every stage was explained properly.",
//     name: "School Administrator",
//     role: "Sample Client Review",
//   },
//   {
//     quote:
//       "The application makes daily school operations much more organized and gives different users their own workflow.",
//     name: "Academic Coordinator",
//     role: "Sample Client Review",
//   },
//   {
//     quote:
//       "We liked the clean interface and the way the system was planned around our actual school requirements.",
//     name: "School Management",
//     role: "Sample Client Review",
//   },
//   {
//     quote:
//       "The system structure makes it easier to understand students, attendance, fees and academic information from one place.",
//     name: "School Operations",
//     role: "Sample Client Review",
//   },
// ];

// /* =====================================================
//    COMPONENT
// ===================================================== */

// function Landing() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     school: "",
//     email: "",
//     message: "",
//   });

//   /* =====================================================
//      HEADER SCROLL
//   ===================================================== */

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   /* =====================================================
//      REVEAL ANIMATION
//   ===================================================== */

//   useEffect(() => {
//     const elements = document.querySelectorAll(".reveal");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     elements.forEach((element) => observer.observe(element));

//     return () => observer.disconnect();
//   }, []);

//   /* =====================================================
//      NAVIGATION
//   ===================================================== */

//   const scrollToSection = (id) => {
//     setMenuOpen(false);

//     const section = document.getElementById(id);

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   /* =====================================================
//      FORM
//   ===================================================== */

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     localStorage.setItem(
//       "yashvitech_project_enquiry",
//       JSON.stringify(formData)
//     );

//     setSubmitted(true);

//     setFormData({
//       name: "",
//       school: "",
//       email: "",
//       message: "",
//     });

//     setTimeout(() => {
//       setSubmitted(false);
//     }, 4000);
//   };

//   /* =====================================================
//      REVIEW ROW HELPER
//   ===================================================== */

//   const reviewItems = [...reviews, ...reviews];

//   return (
//     <div className="single-page">

//       {/* =================================================
//           HEADER
//       ================================================= */}

//       <header
//         className={`site-header ${
//           scrolled ? "header-scrolled" : ""
//         }`}
//       >
//         <div className="navbar-header">

//           {/* LOGO */}

//           <button
//             className="navbar-logo"
//             onClick={() => scrollToSection("home")}
//             aria-label="Go to home"
//           >
//             <span className="navbar-logo-image">
//               <img
//                 src={schoolImage}
//                 alt="YashviTech IT Solution Pvt. Ltd."
//               />
//             </span>
//           </button>

//           {/* NAVIGATION */}

//           <nav
//             className={`desktop-nav ${
//               menuOpen ? "mobile-open" : ""
//             }`}
//           >
//             <button
//               className="navbar-link active"
//               onClick={() => scrollToSection("home")}
//             >
//               <span>01</span>
//               Home
//             </button>

//             <button
//               className="navbar-link"
//               onClick={() => scrollToSection("process")}
//             >
//               <span>02</span>
//               Process
//             </button>

//             <button
//               className="navbar-link"
//               onClick={() => scrollToSection("reviews")}
//             >
//               <span>03</span>
//               Reviews
//             </button>

//             <button
//               className="navbar-link"
//               onClick={() => scrollToSection("modules")}
//             >
//               <span>04</span>
//               Modules
//             </button>

//             <button
//               className="navbar-link"
//               onClick={() => scrollToSection("analytics")}
//             >
//               <span>05</span>
//               Analytics
//             </button>

//             <button
//               className="navbar-button"
//               onClick={() => scrollToSection("contact")}
//             >
//               <span className="contact-icon">✦</span>
//               <span>Start a Project</span>
//               <strong>→</strong>
//             </button>
//           </nav>

//           {/* MOBILE MENU */}

//           <button
//             className={`menu-button ${
//               menuOpen ? "menu-active" : ""
//             }`}
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle navigation"
//             aria-expanded={menuOpen}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>

//         </div>
//       </header>

//       <main>

//         {/* =================================================
//             HERO
//         ================================================= */}

//         <section id="home" className="section home-section">

//           <div className="hero-background-glow hero-glow-one"></div>
//           <div className="hero-background-glow hero-glow-two"></div>

//           <div className="home-container">

//             {/* HERO CONTENT */}

//             <div className="home-left reveal">

//               <div className="eyebrow">
//                 <span className="eyebrow-dot"></span>

//                 YASHVITECH

//                 <span className="eyebrow-divider">
//                   ×
//                 </span>

//                 SCHOOL MANAGEMENT SYSTEM
//               </div>

//               <h1>
//                 We turn a school's
//                 <span> idea </span>
//                 into a complete digital system.
//               </h1>

//               <p className="home-text">
//                 From requirement discussion and UI/UX planning to
//                 React frontend, Python backend, testing and
//                 deployment — Yashvitech builds modern school
//                 management solutions around actual business
//                 requirements.
//               </p>

//               <div className="home-actions">

//                 <button
//                   className="btn home-main-btn"
//                   onClick={() => scrollToSection("process")}
//                 >
//                   Explore Our Process
//                   <span>→</span>
//                 </button>

//                 <button
//                   className="btn home-outline-btn"
//                   onClick={() => scrollToSection("modules")}
//                 >
//                   Explore Modules
//                   <span>↗</span>
//                 </button>

//               </div>

//               <div className="home-trust">

//                 <div className="trust-number">
//                   01
//                 </div>

//                 <div>
//                   <strong>
//                     Requirement → Design → Development → Deployment
//                   </strong>

//                   <span>
//                     A structured journey from idea to working product.
//                   </span>
//                 </div>

//               </div>

//               <div className="home-bottom-stats">

//                 <div>
//                   <strong>08+</strong>
//                   <span>Core Modules</span>
//                 </div>

//                 <div>
//                   <strong>04</strong>
//                   <span>User Roles</span>
//                 </div>

//                 <div>
//                   <strong>100%</strong>
//                   <span>Responsive UI</span>
//                 </div>

//               </div>

//             </div>

//             {/* HERO DASHBOARD */}

//             <div className="home-right reveal">

//               <div className="dashboard-window">

//                 {/* BROWSER BAR */}

//                 <div className="dashboard-browser">

//                   <div className="browser-dots">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                   </div>

//                   <div className="browser-url">
//                     yashvitech.school / dashboard
//                   </div>

//                   <div className="browser-live">
//                     <span></span>
//                     Live
//                   </div>

//                 </div>

//                 {/* DASHBOARD */}

//                 <div className="dashboard-body">

//                   {/* SIDEBAR */}

//                   <aside className="dashboard-sidebar">

//                     <div className="dashboard-logo">
//                       Y
//                     </div>

//                     <div className="dashboard-menu">

//                       <span className="dashboard-menu-active">
//                         <i>⌂</i>
//                         <b>Overview</b>
//                       </span>

//                       <span>
//                         <i>ST</i>
//                         <b>Students</b>
//                       </span>

//                       <span>
//                         <i>AT</i>
//                         <b>Attendance</b>
//                       </span>

//                       <span>
//                         <i>FE</i>
//                         <b>Fees</b>
//                       </span>

//                       <span>
//                         <i>EX</i>
//                         <b>Exams</b>
//                       </span>

//                       <span>
//                         <i>RP</i>
//                         <b>Reports</b>
//                       </span>

//                     </div>

//                   </aside>

//                   {/* MAIN DASHBOARD */}

//                   <div className="dashboard-main">

//                     <div className="dashboard-top">

//                       <div>
//                         <small>ADMIN DASHBOARD</small>
//                         <h3>Good morning, Admin</h3>
//                       </div>

//                       <div className="dashboard-profile">
//                         Y
//                       </div>

//                     </div>

//                     {/* DASHBOARD CARDS */}

//                     <div className="dashboard-stat-grid">

//                       <div className="dashboard-stat-card">

//                         <div className="dashboard-stat-icon blue">
//                           ST
//                         </div>

//                         <div>
//                           <small>Total Students</small>
//                           <strong>2,486</strong>
//                           <span className="positive">
//                             ↑ 8.2%
//                           </span>
//                         </div>

//                       </div>

//                       <div className="dashboard-stat-card">

//                         <div className="dashboard-stat-icon orange">
//                           AT
//                         </div>

//                         <div>
//                           <small>Attendance</small>
//                           <strong>94.6%</strong>
//                           <span className="positive">
//                             ↑ 4.5%
//                           </span>
//                         </div>

//                       </div>

//                       <div className="dashboard-stat-card">

//                         <div className="dashboard-stat-icon purple">
//                           FE
//                         </div>

//                         <div>
//                           <small>Fee Collection</small>
//                           <strong>88.4%</strong>
//                           <span className="positive">
//                             ↑ 6.1%
//                           </span>
//                         </div>

//                       </div>

//                     </div>

//                     {/* DASHBOARD CONTENT */}

//                     <div className="dashboard-content-grid">

//                       {/* CHART */}

//                       <div className="dashboard-chart-card">

//                         <div className="dashboard-card-heading">

//                           <div>
//                             <small>PERFORMANCE</small>
//                             <strong>School Overview</strong>
//                           </div>

//                           <span>
//                             This Year ▾
//                           </span>

//                         </div>

//                         <div className="dashboard-chart">

//                           <div className="chart-line chart-line-one"></div>
//                           <div className="chart-line chart-line-two"></div>
//                           <div className="chart-line chart-line-three"></div>

//                           <div className="chart-bars">

//                             <span style={{ height: "38%" }}></span>
//                             <span style={{ height: "52%" }}></span>
//                             <span style={{ height: "47%" }}></span>
//                             <span style={{ height: "68%" }}></span>
//                             <span style={{ height: "61%" }}></span>
//                             <span style={{ height: "78%" }}></span>
//                             <span style={{ height: "89%" }}></span>

//                           </div>

//                         </div>

//                         <div className="chart-months">
//                           <span>Jan</span>
//                           <span>Feb</span>
//                           <span>Mar</span>
//                           <span>Apr</span>
//                           <span>May</span>
//                           <span>Jun</span>
//                           <span>Jul</span>
//                         </div>

//                       </div>

//                       {/* ACTIVITY */}

//                       <div className="dashboard-activity-card">

//                         <div className="dashboard-card-heading">
//                           <div>
//                             <small>ACTIVITY</small>
//                             <strong>Recent Updates</strong>
//                           </div>

//                           <span>•••</span>
//                         </div>

//                         <div className="activity-item">
//                           <span className="activity-icon blue">
//                             ST
//                           </span>

//                           <div>
//                             <strong>
//                               New student added
//                             </strong>

//                             <small>
//                               Admission record updated
//                             </small>
//                           </div>

//                           <em>
//                             2m
//                           </em>
//                         </div>

//                         <div className="activity-item">
//                           <span className="activity-icon orange">
//                             FE
//                           </span>

//                           <div>
//                             <strong>
//                               Fee payment received
//                             </strong>

//                             <small>
//                               Receipt generated
//                             </small>
//                           </div>

//                           <em>
//                             8m
//                           </em>
//                         </div>

//                         <div className="activity-item">
//                           <span className="activity-icon green">
//                             EX
//                           </span>

//                           <div>
//                             <strong>
//                               Result updated
//                             </strong>

//                             <small>
//                               Grade report published
//                             </small>
//                           </div>

//                           <em>
//                             14m
//                           </em>
//                         </div>

//                       </div>

//                     </div>

//                   </div>

//                 </div>

//               </div>

//               {/* FLOATING CARD */}

//               <div className="hero-floating-card hero-floating-top">

//                 <div className="floating-check">
//                   ✓
//                 </div>

//                 <div>
//                   <strong>
//                     System Ready
//                   </strong>

//                   <small>
//                     All modules connected
//                   </small>
//                 </div>

//               </div>

//               <div className="hero-floating-card hero-floating-bottom">

//                 <div className="floating-progress">

//                   <span style={{ width: "88%" }}></span>

//                 </div>

//                 <div>
//                   <strong>
//                     88.4%
//                   </strong>

//                   <small>
//                     Fee Collection
//                   </small>
//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =================================================
//             CLIENT REQUIREMENT
//         ================================================= */}

//         <section className="section problem-section">

//           <div className="section-container">

//             <div className="section-heading reveal">

//               <span className="section-number">
//                 01 / CLIENT REQUIREMENT
//               </span>

//               <h2>
//                 First, we understand
//                 <span> the problem.</span>
//               </h2>

//               <p>
//                 Har school ka workflow different hota hai.
//                 Isliye ready-made solution dene ke bajay hum
//                 pehle actual requirements, users aur daily
//                 operations ko understand karte hain.
//               </p>

//             </div>

//             <div className="problem-grid">

//               {/* DISCOVERY CARD */}

//               <div className="problem-visual reveal">

//                 <div className="discovery-card">

//                   <div className="discovery-top">

//                     <span>
//                       CLIENT DISCOVERY
//                     </span>

//                     <strong>
//                       01
//                     </strong>

//                   </div>

//                   <div className="discovery-center">

//                     <div className="discovery-ring">
//                       <div>
//                         Y
//                       </div>
//                     </div>

//                     <h3>
//                       Understand.
//                       <br />
//                       Plan. Build.
//                     </h3>

//                     <p>
//                       Turning real school workflows into
//                       simple digital experiences.
//                     </p>

//                   </div>

//                   <div className="discovery-bottom">

//                     <span>
//                       Requirements
//                     </span>

//                     <span>
//                       Users
//                     </span>

//                     <span>
//                       Workflow
//                     </span>

//                   </div>

//                 </div>

//               </div>

//               {/* PROBLEMS */}

//               <div className="problem-list reveal">

//                 <div className="problem-item">

//                   <div className="problem-index">
//                     01
//                   </div>

//                   <div>
//                     <h3>
//                       Manual Records
//                     </h3>

//                     <p>
//                       Registers aur scattered files ki wajah
//                       se important information manage karna
//                       difficult aur time-consuming ho sakta hai.
//                     </p>
//                   </div>

//                   <span className="problem-arrow">
//                     →
//                   </span>

//                 </div>

//                 <div className="problem-item">

//                   <div className="problem-index">
//                     02
//                   </div>

//                   <div>
//                     <h3>
//                       Attendance Tracking
//                     </h3>

//                     <p>
//                       Daily attendance ko maintain karna,
//                       reports banana aur trends samajhna
//                       ek organized digital workflow se easier
//                       ho sakta hai.
//                     </p>
//                   </div>

//                   <span className="problem-arrow">
//                     →
//                   </span>

//                 </div>

//                 <div className="problem-item">

//                   <div className="problem-index">
//                     03
//                   </div>

//                   <div>
//                     <h3>
//                       Fee Management
//                     </h3>

//                     <p>
//                       Paid, pending aur receipt records ko
//                       ek connected system mein maintain karne
//                       se finance workflow more organized hota hai.
//                     </p>
//                   </div>

//                   <span className="problem-arrow">
//                     →
//                   </span>

//                 </div>

//                 <div className="problem-item">

//                   <div className="problem-index">
//                     04
//                   </div>

//                   <div>
//                     <h3>
//                       Communication Gap
//                     </h3>

//                     <p>
//                       School, teachers, students aur parents
//                       ke important updates ko ek central platform
//                       par connect karna easier hota hai.
//                     </p>
//                   </div>

//                   <span className="problem-arrow">
//                     →
//                   </span>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =================================================
//             SOLUTION
//         ================================================= */}

//         <section className="section solution-section">

//           <div className="section-container">

//             <div className="section-heading centered reveal">

//               <span className="section-number">
//                 02 / OUR SOLUTION
//               </span>

//               <h2>
//                 One system.
//                 <span> Every school workflow.</span>
//               </h2>

//               <p>
//                 Client ki requirements ke according ek connected
//                 digital ecosystem create kiya jata hai jisme
//                 different users ko unke role ke according focused
//                 features aur workflows milte hain.
//               </p>

//             </div>

//             {/* USER FLOW */}

//             <div className="solution-flow reveal">

//               <div className="solution-box">

//                 <div className="solution-icon">
//                   AD
//                 </div>

//                 <strong>
//                   Admin
//                 </strong>

//                 <small>
//                   Management
//                 </small>

//               </div>

//               <div className="flow-line"></div>

//               <div className="solution-box">

//                 <div className="solution-icon">
//                   TE
//                 </div>

//                 <strong>
//                   Teacher
//                 </strong>

//                 <small>
//                   Classroom
//                 </small>

//               </div>

//               <div className="flow-line"></div>

//               <div className="solution-box">

//                 <div className="solution-icon">
//                   ST
//                 </div>

//                 <strong>
//                   Student
//                 </strong>

//                 <small>
//                   Learning
//                 </small>

//               </div>

//               <div className="flow-line"></div>

//               <div className="solution-box">

//                 <div className="solution-icon">
//                   PA
//                 </div>

//                 <strong>
//                   Parent
//                 </strong>

//                 <small>
//                   Updates
//                 </small>

//               </div>

//             </div>

//             {/* TECHNOLOGY STRIP */}

//             <div className="tech-strip reveal">

//               <div>
//                 <span>FRONTEND</span>
//                 <strong>React.js</strong>
//               </div>

//               <div>
//                 <span>BACKEND</span>
//                 <strong>Python</strong>
//               </div>

//               <div>
//                 <span>API</span>
//                 <strong>REST API</strong>
//               </div>

//               <div>
//                 <span>DATABASE</span>
//                 <strong>SQL / NoSQL</strong>
//               </div>

//               <div>
//                 <span>DESIGN</span>
//                 <strong>Responsive UI</strong>
//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =================================================
//             WORKFLOW
//         ================================================= */}

//         <section
//           id="process"
//           className="section workflow-section"
//         >

//           <div className="section-container">

//             <div className="section-heading reveal">

//               <span className="section-number">
//                 03 / PROJECT WORKFLOW
//               </span>

//               <h2>
//                 From first meeting
//                 <span> to final product.</span>
//               </h2>

//               <p>
//                 Requirement se deployment tak ek structured
//                 development process follow kiya jata hai,
//                 jisse project ka scope aur direction clear rahe.
//               </p>

//             </div>

//             <div className="workflow-grid">

//               {workflow.map((item, index) => (

//                 <article
//                   className="workflow-card reveal"
//                   key={item.number}
//                   style={{
//                     transitionDelay: `${index * 70}ms`,
//                   }}
//                 >

//                   <div className="workflow-card-top">

//                     <span className="workflow-tag">
//                       {item.tag}
//                     </span>

//                     <strong>
//                       {item.number}
//                     </strong>

//                   </div>

//                   <div className="workflow-icon">
//                     {item.number}
//                   </div>

//                   <h3>
//                     {item.title}
//                   </h3>

//                   <p>
//                     {item.text}
//                   </p>

//                   <div className="workflow-card-bottom">
//                     <span>
//                       Development stage
//                     </span>

//                     <b>
//                       →
//                     </b>
//                   </div>

//                 </article>

//               ))}

//             </div>

//           </div>

//         </section>


//         {/* =================================================
//             CLIENT REVIEWS
//             SCREENSHOTS SECTION REMOVED
//         ================================================= */}

//         <section
//           id="reviews"
//           className="section reviews-section"
//         >

//           <div className="reviews-bg-orb reviews-orb-one"></div>
//           <div className="reviews-bg-orb reviews-orb-two"></div>

//           <div className="section-container">

//             <div className="section-heading centered reveal">

//               <span className="section-number">
//                 04 / CLIENT REVIEWS
//               </span>

//               <h2>
//                 Built around
//                 <span> client experience.</span>
//               </h2>

//               <p>
//                 Development ke different stages par feedback
//                 ko consider karke interface, workflow aur
//                 overall product experience ko continuously
//                 improve kiya jata hai.
//               </p>

//             </div>

//           </div>

//           {/* REVIEW ROW ONE */}

//           <div className="reviews-marquee">

//             <div className="reviews-track reviews-track-left">

//               {reviewItems.map((review, index) => (

//                 <article
//                   className="review-marquee-card"
//                   key={`left-${index}`}
//                 >

//                   <div className="review-card-top">

//                     <div className="review-stars">
//                       ★★★★★
//                     </div>

//                     <span className="review-project">
//                       SCHOOL PROJECT
//                     </span>

//                   </div>

//                   <div className="review-quote-icon">
//                     “
//                   </div>

//                   <p>
//                     {review.quote}
//                   </p>

//                   <div className="review-card-bottom">

//                     <div className="review-avatar">
//                       {review.name.charAt(0)}
//                     </div>

//                     <div className="review-author">

//                       <strong>
//                         {review.name}
//                       </strong>

//                       <span>
//                         {review.role}
//                       </span>

//                     </div>

//                     <div className="review-arrow">
//                       ↗
//                     </div>

//                   </div>

//                 </article>

//               ))}

//             </div>

//           </div>


//           {/* REVIEW ROW TWO */}

//           <div className="reviews-marquee reviews-marquee-second">

//             <div className="reviews-track reviews-track-right">

//               {reviewItems.map((review, index) => (

//                 <article
//                   className="review-marquee-card"
//                   key={`right-${index}`}
//                 >

//                   <div className="review-card-top">

//                     <div className="review-stars">
//                       ★★★★★
//                     </div>

//                     <span className="review-project">
//                       DIGITAL SYSTEM
//                     </span>

//                   </div>

//                   <div className="review-quote-icon">
//                     “
//                   </div>

//                   <p>
//                     {review.quote}
//                   </p>

//                   <div className="review-card-bottom">

//                     <div className="review-avatar">
//                       {review.name.charAt(0)}
//                     </div>

//                     <div className="review-author">

//                       <strong>
//                         {review.name}
//                       </strong>

//                       <span>
//                         {review.role}
//                       </span>

//                     </div>

//                     <div className="review-arrow">
//                       ↗
//                     </div>

//                   </div>

//                 </article>

//               ))}

//             </div>

//           </div>


//           {/* REVIEW INFO */}

//           <div className="reviews-bottom reveal">

//             <div className="reviews-bottom-item">
//               <span className="reviews-status-dot"></span>
//               <strong>
//                 Client-focused development
//               </strong>
//             </div>

//             <div className="reviews-divider"></div>

//             <div className="reviews-bottom-item">
//               <span>✦</span>
//               <strong>
//                 Custom UI / UX
//               </strong>
//             </div>

//             <div className="reviews-divider"></div>

//             <div className="reviews-bottom-item">
//               <span>✓</span>
//               <strong>
//                 Responsive experience
//               </strong>
//             </div>

//           </div>

//         </section>


//         {/* =================================================
//             MODULES
//         ================================================= */}

//         <section
//           id="modules"
//           className="section modules-section"
//         >

//           <div className="section-container">

//             <div className="section-heading reveal">

//               <span className="section-number">
//                 05 / CORE MODULES
//               </span>

//               <h2>
//                 Everything the school
//                 <span> needs in one place.</span>
//               </h2>

//               <p>
//                 School requirements ke basis par modules ko
//                 customize, expand aur connect kiya ja sakta hai.
//                 Goal hai daily operations ko ek organized digital
//                 workflow mein lana.
//               </p>

//             </div>

//             <div className="modules-grid">

//               {modules.map((module, index) => (

//                 <article
//                   className="module-card reveal"
//                   key={module.title}
//                   style={{
//                     transitionDelay: `${index * 60}ms`,
//                   }}
//                 >

//                   <div className="module-card-top">

//                     <span className="module-number">
//                       {module.number}
//                     </span>

//                     <div className="module-icon">
//                       {module.icon}
//                     </div>

//                   </div>

//                   <h3>
//                     {module.title}
//                   </h3>

//                   <p>
//                     {module.text}
//                   </p>

//                   <div className="module-features">

//                     {module.features.map((feature) => (
//                       <span key={feature}>
//                         ✓ {feature}
//                       </span>
//                     ))}

//                   </div>

//                   <div className="module-link">
//                     Explore module
//                     <span>→</span>
//                   </div>

//                 </article>

//               ))}

//             </div>

//           </div>

//         </section>


//         {/* =================================================
//             ANALYTICS
//         ================================================= */}

//         <section
//           id="analytics"
//           className="section analytics-section"
//         >

//           <div className="analytics-background"></div>

//           <div className="section-container">

//             <div className="analytics-layout">

//               {/* COPY */}

//               <div className="analytics-copy reveal">

//                 <span className="section-number">
//                   06 / DATA & ANALYTICS
//                 </span>

//                 <h2>
//                   Turn school data into
//                   <span> useful insights.</span>
//                 </h2>

//                 <p>
//                   Management ko important information quickly
//                   understand karne ke liye reports, KPIs aur
//                   analytics dashboards develop kiye ja sakte hain.
//                   Iss data ko readable aur actionable format
//                   mein present kiya ja sakta hai.
//                 </p>

//                 <div className="analytics-stats">

//                   <div>
//                     <strong>94.6%</strong>
//                     <span>Attendance</span>
//                   </div>

//                   <div>
//                     <strong>88.4%</strong>
//                     <span>Fee Collection</span>
//                   </div>

//                   <div>
//                     <strong>91%</strong>
//                     <span>Performance</span>
//                   </div>

//                 </div>

//                 <small className="demo-note">
//                   * Sample project/demo data shown for presentation.
//                 </small>

//               </div>

//               {/* CHART */}

//               <div className="chart-card reveal">

//                 <div className="chart-header">

//                   <div>
//                     <small>
//                       MONTHLY OVERVIEW
//                     </small>

//                     <strong>
//                       School Performance
//                     </strong>
//                   </div>

//                   <span className="chart-badge">
//                     +12.4%
//                   </span>

//                 </div>

//                 <div className="chart">

//                   <div className="chart-y">
//                     <span>100</span>
//                     <span>75</span>
//                     <span>50</span>
//                     <span>25</span>
//                     <span>0</span>
//                   </div>

//                   <div className="chart-area">

//                     <div className="chart-grid-line one"></div>
//                     <div className="chart-grid-line two"></div>
//                     <div className="chart-grid-line three"></div>
//                     <div className="chart-grid-line four"></div>

//                     <div className="chart-bars">

//                       <div>
//                         <span style={{ height: "48%" }}></span>
//                         <small>Jan</small>
//                       </div>

//                       <div>
//                         <span style={{ height: "62%" }}></span>
//                         <small>Feb</small>
//                       </div>

//                       <div>
//                         <span style={{ height: "55%" }}></span>
//                         <small>Mar</small>
//                       </div>

//                       <div>
//                         <span style={{ height: "74%" }}></span>
//                         <small>Apr</small>
//                       </div>

//                       <div>
//                         <span style={{ height: "68%" }}></span>
//                         <small>May</small>
//                       </div>

//                       <div>
//                         <span style={{ height: "88%" }}></span>
//                         <small>Jun</small>
//                       </div>

//                     </div>

//                   </div>

//                 </div>

//                 <div className="chart-footer">

//                   <div>
//                     <span className="legend-blue"></span>
//                     Attendance
//                   </div>

//                   <div>
//                     <span className="legend-orange"></span>
//                     Performance
//                   </div>

//                   <div>
//                     <span className="legend-dark"></span>
//                     Collection
//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =================================================
//             CONTACT / CTA
//         ================================================= */}

//         <section
//           id="contact"
//           className="section contact-section"
//         >

//           <div className="contact-glow contact-glow-one"></div>
//           <div className="contact-glow contact-glow-two"></div>

//           <div className="section-container">

//             <div className="contact-layout">

//               {/* COPY */}

//               <div className="contact-copy reveal">

//                 <span className="section-number">
//                   07 / START A PROJECT
//                 </span>

//                 <h2>
//                   Have a school management
//                   <span> idea?</span>
//                 </h2>

//                 <p>
//                   Apni requirements share karein. Yashvitech
//                   requirement discussion se deployment tak
//                   complete development journey plan kar sakta hai.
//                 </p>

//                 <div className="contact-points">

//                   <div>
//                     <span>01</span>
//                     <strong>
//                       Requirement Discussion
//                     </strong>
//                     <small>
//                       Understand the actual need
//                     </small>
//                   </div>

//                   <div>
//                     <span>02</span>
//                     <strong>
//                       UI / UX Planning
//                     </strong>
//                     <small>
//                       Plan the user experience
//                     </small>
//                   </div>

//                   <div>
//                     <span>03</span>
//                     <strong>
//                       Development & Testing
//                     </strong>
//                     <small>
//                       Build and verify the system
//                     </small>
//                   </div>

//                   <div>
//                     <span>04</span>
//                     <strong>
//                       Deployment & Support
//                     </strong>
//                     <small>
//                       Launch and maintain
//                     </small>
//                   </div>

//                 </div>

//               </div>


//               {/* FORM */}

//               <form
//                 className="contact-form reveal"
//                 onSubmit={handleSubmit}
//               >

//                 <div className="form-header">

//                   <div>
//                     <span>
//                       PROJECT ENQUIRY
//                     </span>

//                     <h3>
//                       Let's build something useful.
//                     </h3>
//                   </div>

//                   <div className="form-header-icon">
//                     ↗
//                   </div>

//                 </div>

//                 <div className="form-row">

//                   <div className="form-group">

//                     <label>
//                       Your Name
//                     </label>

//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Enter your name"
//                       required
//                     />

//                   </div>

//                   <div className="form-group">

//                     <label>
//                       School / Organization
//                     </label>

//                     <input
//                       type="text"
//                       name="school"
//                       value={formData.school}
//                       onChange={handleChange}
//                       placeholder="School name"
//                       required
//                     />

//                   </div>

//                 </div>

//                 <div className="form-group">

//                   <label>
//                     Email Address
//                   </label>

//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="you@example.com"
//                     required
//                   />

//                 </div>

//                 <div className="form-group">

//                   <label>
//                     Project Requirement
//                   </label>

//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Tell us about your school management system..."
//                     rows="6"
//                     required
//                   ></textarea>

//                 </div>

//                 <button
//                   className="submit-button"
//                   type="submit"
//                 >
//                   Send Project Enquiry
//                   <span>→</span>
//                 </button>

//                 {submitted && (
//                   <div className="success-message">
//                     ✓ Project enquiry saved successfully.
//                   </div>
//                 )}

//                 <small className="form-note">
//                   Your information is used only for project
//                   discussion and enquiry purposes.
//                 </small>

//               </form>

//             </div>

//           </div>

//         </section>

//       </main>


//       {/* =================================================
//           FOOTER
//       ================================================= */}

//       <footer className="site-footer">

//         <div className="footer-container">

//           <div className="footer-brand">

//             <button
//               className="footer-logo-button"
//               onClick={() => scrollToSection("home")}
//             >
//               <img
//                 src={schoolImage}
//                 alt="YashviTech"
//               />
//             </button>

//             <p>
//               Building modern digital solutions around
//               real business requirements.
//             </p>

//             <div className="footer-status">
//               <span></span>
//               Available for new projects
//             </div>

//           </div>


//           <div className="footer-links">

//             <div>

//               <strong>
//                 PROJECT
//               </strong>

//               <button
//                 onClick={() => scrollToSection("process")}
//               >
//                 Workflow
//               </button>

//               <button
//                 onClick={() => scrollToSection("modules")}
//               >
//                 Modules
//               </button>

//               <button
//                 onClick={() => scrollToSection("analytics")}
//               >
//                 Analytics
//               </button>

//             </div>

//             <div>

//               <strong>
//                 COMPANY
//               </strong>

//               <button
//                 onClick={() => scrollToSection("home")}
//               >
//                 Home
//               </button>

//               <button
//                 onClick={() => scrollToSection("reviews")}
//               >
//                 Reviews
//               </button>

//               <button
//                 onClick={() => scrollToSection("contact")}
//               >
//                 Contact
//               </button>

//             </div>

//           </div>

//         </div>

//         <div className="footer-bottom">

//           <span>
//             © 2026 Yashvitech. All rights reserved.
//           </span>

//           <span>
//             School Management System • Client Project
//           </span>

//         </div>

//       </footer>

//     </div>
//   );
// }

// export default Landing;
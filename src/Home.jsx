import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import './Home.css'

function Home() {

  const [menuOpen, setMenuOpen] = useState(false)

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


        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? "toggle-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        <div className={`navbar-links ${menuOpen ? "navbar-open" : ""}`}>

          <a href="#home" onClick={() => setMenuOpen(false)}>
            <span>01</span>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            <span>02</span>
            About
          </a>

          <a href="#features" onClick={() => setMenuOpen(false)}>
            <span>03</span>
            Features
          </a>

          <a href="#clients" onClick={() => setMenuOpen(false)}>
            <span>04</span>
            Clients
          </a>

          <a href="#faq" onClick={() => setMenuOpen(false)}>
            <span>05</span>
            FAQ
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <span>06</span>
            Contact
          </a>

        </div>


        <a
          href="#contact"
          className="navbar-button"
          onClick={() => setMenuOpen(false)}
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
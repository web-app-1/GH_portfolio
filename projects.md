---
layout: custom
title: Projects
permalink: /projects/
---

<div class="project-section">
  <div class="project-grid">

    <!-- Project with video modal -->
    <div class="project-card">
      <h3>Digital Neighborhood Web App</h3>
      <p>A tool created to help citizens report events such as: Hazards, Concerns, Evaluations and Problems within their neighborhood.</p>
      <div class="tags">
        <span>Python</span> <span>Django</span> <span>Bootstrap</span> <span>PostgreSQL</span>
      </div>
      <a href="#" onclick="openVideoModal('https://www.youtube.com/embed/uYhbZlMxTv0')" class="btn">Watch Video</a>
    </div>

    <!-- Project with video modal -->
    <div class="project-card">
      <h3>Project Management Web App</h3>
      <p>A custom project management app designed for startups, hosted locally in a NAS for internal networks, No subscriptions and No Ads.</p>
      <div class="tags">
        <span>Python</span> <span>Django</span> <span>Bootstrap</span> <span>PostgreSQL</span>
      </div>
      <a href="#" onclick="openVideoModal('https://www.youtube.com/embed/c6C4WOORX9k')" class="btn">Watch Video</a>
    </div>

    <!-- Project with video modal -->
    <div class="project-card">
      <h3>Quoting Web App</h3>
      <p>Create and Manage your assets and inventory. Scoped for startus to manage, track and create quotes for their customers.</p>
      <div class="tags">
        <span>Python</span> <span>Django</span> <span>Bootstrap</span> <span>PostgreSQL</span>
      </div>
      <a href="#" onclick="openVideoModal('https://www.youtube.com/embed/uOT62cDnJ6M')" class="btn">Watch Video</a>
    </div>

    <!-- Project with video modal -->
    <div class="project-card">
      <h3>Email Blaster Web App</h3>
      <p>Easily manage email campaigns, with this tool you can send many emails at once and prevent human errors in the process.</p>
      <div class="tags">
        <span>Python</span> <span>Django</span>
      </div>
      <a href="#" onclick="openVideoModal('https://www.youtube.com/embed/uOT62cDnJ6M')" class="btn">Watch Video</a>
    </div>

    <!-- Project with image gallery -->
    <div class="project-card">
      <h3>Virtual Assemblies Web App</h3>
      <p>A complete platform for managing virtual assemblies and community voting processes. Leverages technology for time savings.</p>
      <div class="tags">
        <span>Django</span> <span>PostgreSQL</span> <span>Python</span>
      </div>
      <a href="#" onclick="openGallery('gallery1')" class="btn">View Gallery</a>
    </div>

    <!-- Project with image gallery -->
    <div class="project-card">
      <h3>Property Management Website</h3>
      <p>A website and portal for legal services, property management and other servcices in Panama City, Panama.</p>
      <div class="tags">
        <span>HTML</span> <span>CSS Pure</span> <span>JavaScript</span>
      </div>
      <a href="#" onclick="openGallery('gallery2')" class="btn">View Gallery</a>
    </div>

  </div>
</div>

<!-- Hidden gallery modal 1 -->
<div id="gallery1" class="gallery-modal hidden">
  <img src="/assets/img/img1.png" alt="Image 1">
  <img src="/assets/img/img2.png" alt="Image 2">
  <img src="/assets/img/img3.png" alt="Image 3">
  <img src="/assets/img/img4.png" alt="Image 4">
  <img src="/assets/img/img5.png" alt="Image 5">
  <img src="/assets/img/img6.png" alt="Image 6">
  <img src="/assets/img/img7.png" alt="Image 7">

  <span class="close-gallery" onclick="closeGallery()">×</span>
</div>

<!-- Hidden gallery modal 1 -->
<div id="gallery2" class="gallery-modal hidden">
  <img src="/assets/img/img8.png" alt="Image 8">
  <img src="/assets/img/img9.png" alt="Image 9">
  <img src="/assets/img/img10.png" alt="Image 10">
  <span class="close-gallery" onclick="closeGallery()">×</span>
</div>



<!-- Video modal -->
<div id="video-modal" class="video-modal hidden">
  <div class="video-content">
    <iframe id="video-frame" src="" frameborder="0" allowfullscreen></iframe>
    <span class="close-video" onclick="closeVideoModal()">×</span>
  </div>
</div>

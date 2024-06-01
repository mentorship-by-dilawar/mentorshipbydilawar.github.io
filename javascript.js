document.addEventListener('DOMContentLoaded', function () {
    const seoLinks = document.querySelectorAll('.seo-link');
    const modalBody = document.getElementById('seoModalBody');
    const modalTitle = document.getElementById('seoModalLabel');
    const seoModal = new bootstrap.Modal(document.getElementById('seoModal'));

    const seoContent = {
      'on-page': `
        <h6>On-Page SEO</h6>
        <ul>
          <li>Content Quality</li>
          <li>Image Optimization</li>
          <li>Keywords</li>
          <li>HTML Tags</li>
          <li>Responsive Design</li>
          <li>Internal & External Links</li>
          <li>Meta Data</li>
          <li>URL</li>
        </ul>
      `,
      'off-page': `
        <h6>Off-Page SEO</h6>
        <ul>
          <li>Backlinks</li>
          <li>Guest Posting</li>
          <li>Social Promotions</li>
          <li>Listings</li>
          <li>Podcasts</li>
          <li>Reviews</li>
        </ul>
      `,
      'technical': `
        <h6>Technical SEO</h6>
        <ul>
          <li>Website Speed</li>
          <li>Structured Data</li>
          <li>Canonicalization</li>
          <li>XML Sitemap</li>
          <li>SSL and HTTPS</li>
          <li>Social Sharing Buttons</li>
        </ul>
      `
    };

    if (!seoLinks || !modalBody || !modalTitle || !seoModal) {
      console.error('Failed to find required elements.');
      return;
    }

    seoLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const contentKey = this.getAttribute('data-content');
        if (!contentKey || !seoContent[contentKey]) {
          console.error('Invalid content key or content not found.');
          return;
        }
        modalTitle.textContent = contentKey.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) + ' SEO';
        modalBody.innerHTML = seoContent[contentKey];
        seoModal.show();
      });
    });
  });
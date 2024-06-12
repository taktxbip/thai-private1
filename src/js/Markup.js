class Markup {
  constructor(photos, words) {
    this.photos = photos;
    this.words = words;

    this.clusters = {};
    this.base = 'https://thai-private1.s3.ap-northeast-1.amazonaws.com/';
    this.prepare();

  }

  draw() {
    console.log(this.clusters);

    // navigation
    const gallery = $('#gallery');
    const navigation = $('#navigation');
    let html = '<ul>';

    for (const date in this.clusters) {
      html += `<li><a href="#${date}">${this.getHumanDate(date, 'short')}</a></li>`;
    }
    html += '</ul>';

    navigation.html(html);

    // main content
    html = '';
    for (const date in this.clusters) {
      html += `<div class="gallery-item" id="${date}">
                <h2>${this.getHumanDate(date)}</h2>`;

      this.clusters[date].forEach(photo => {
        html += `<a class="progressive" href="${photo}" data-fancybox="gallery" data-caption="${this.getHumanDate(date)}">
                  <img src="${photo}" data-hq="${photo}" class="progressive-thumbnail" loading="lazy">
                  <canvas class="progressive-canvas"></canvas>
                </a>`;
      })

      // add words
      if (typeof this.words[date] !== 'undefined') {
        html += '<h3>Words</h3>';
        html += '<ul class="words">';
        this.words[date].forEach(line => {
          html += `<li>${line}</li>`;
        });
        html += '</ul>';
      }

      html += '</div>';
    }

    gallery.html(html);
  }

  getHumanDate(stroke, month = 'long') {
    const timestamp = Date.parse(stroke);

    const date = new Date(timestamp);
    const dateString = date.toLocaleString('en-GB', {
      timeZone: 'UTC',
      month,
      day: 'numeric'
    });

    return dateString;
  }

  prepare() {
    this.photos.forEach(photo => {
      const date = this.getDate(photo);
      const path = this.getPath(photo);

      if (date) {
        if (typeof this.clusters[date] === 'undefined') {
          this.clusters[date] = [path]
        } else {
          this.clusters[date].push(path);
        }
      }
    });
  }

  getPath(name, tiny = false) {
    return tiny ? `${this.base}${name}-tiny.jpg` : `${this.base}${name}.jpg`;
  }

  getDate(photoName) {
    const m = photoName.match(/^[\d]{4}-[\d]{2}-[\d]{2}/);

    if (!m.length) return false;

    return m[0];
  }
}

export default Markup;
document.addEventListener('alpine:init', () => {

  function get_hostname(url) {
      var m = url.match(/^http:\/\/[^/]+/);
      var ms = url.match(/^https:\/\/[^/]+/);

      if(m) {
          return m[0]
      } else if(ms) {
          return ms[0]
      } else {
          return null;
      }
  }

  host = get_hostname($(location).attr('href')); // Domain name

  Alpine.data('datatable', (data) => ({

  }))
})

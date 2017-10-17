<template>
  <div>
    <div id="print">
      <div class=""></div>
      <video width="100%" height="100%" id="video"></video>
    </div>
    
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  data() {
    return {
      
    }
  },
  methods: {

  },
  mounted: function() {
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var $print = $('#print');
    if (width < height) {
      $print.width(height);
      $print.height(width);
      $print.css('top', (height - width) / 2);
      $print.css('left', 0 - (height - width) / 2);
      $print.css('transform', 'rotate(90deg)');
      $print.css('transform-origin', '50% 50%');
    }

    window.addEventListener(evt, function() {     
      setTimeout(function() { 
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        if (width > height) {
          $('html,body').width(width);
          $('html,body').height(height);
          $print.width(width);
          $print.height(height);
          $print.css('top', 0);
          $print.css('left', 0);
          $print.css('transform', 'none');
          $print.css('transform-origin', '50% 50%');
        }
        else {
          $('html,body').width(height);
          $('html,body').height(width);
          $print.width(height);
          $print.height(width);
          $print.css('top', (height - width) / 2);
          $print.css('left', 0 - (height - width) / 2);
          $print.css('transform', 'rotate(90deg)');
          $print.css('transform-origin', '50% 50%');
        }
      }, 300);
    }, false);


  },
  components: {

  }
}
</script>

<style scoped>

@media screen and (orientation: portrait) {
  #print {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;    
    overflow: hidden;
  }
}

@media screen and (orientation: landscape) {
  #print {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}

</style>


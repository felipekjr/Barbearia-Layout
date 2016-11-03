jQuery(function() {
  if(jQuery('.vl-tabs'))
    jQuery('.vl-tabs').hide();
  jQuery('a.vl-tab-link').click(function(e) {
    e.preventDefault();
    // var el = this.href;
    var el = '#tab-2';
    jQuery('.vl-tabs').removeClass('vl-tab-open');
    jQuery(el).addClass('vl-tab-open');
    jQuery(this).parent().parent().find('.active').removeClass('active');
    jQuery(this).parent().addClass('active');
    return false;
  })
  jQuery('.carousel').carousel({
    interval: 2000
  })
});
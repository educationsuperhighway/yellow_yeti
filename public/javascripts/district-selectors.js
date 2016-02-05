$(function() {
  var extractStates = function(data) {
    return data.reduce(function(memo, current) {
      memo.push(current.state[0]);
      return memo;
    }, []);
  };

  var districtsForState = function(state, data) {
    var stateData = data.filter(function(el){
      return el.state[0] == state;
    })[0];
    return stateData.districts;
  };

  var optionHTML = function(label, value) {
    return "<option value='" + value + "' data-label='" + label + "'>" + label + "</option>";
  };

  var populateStateOptions = function(states) {
    var el = $("#state-dropdown");
    el.empty();
    el.append(optionHTML("Select State", ""));
    $.each(states, function(idx, state) {
      el.append(optionHTML(state, state));
    });
  };

  var populateDistrictOptions = function(state, data) {
    var el = $("#district-dropdown");
    el.empty();
    el.append(optionHTML("Select School District", ""));
    $.each(districtsForState(state, data), function(idx, district) {
      el.append(optionHTML(district.name, district.bw_per_student));
    });
  };

  var reloadVideo = function(bw) {
    $("#video-player source.mp4").attr('src', '/video?kbps=' + bw);
  };

  $.get('/data', function(data) {
    populateStateOptions(extractStates(data));

    $("#state-dropdown").on('change', function() {
      var state = $(this).val();
      populateDistrictOptions(state, data);
    });

    $("#district-dropdown").on('change', function() {
      var bw = $(this).val();
      var district = $("#district-dropdown option:selected").text();

      $('#district-bw').text(bw);
      $('#district-name').text(district);
      reloadVideo(bw);
    });
  });
});
window.videoLoader = {};

$(function() {
  var stateDropdown = $("#state-dropdown"),
      districtDropdown = $("#district-dropdown");

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

  var optionHTML = function(label, value, numStudents) {
    return "<option id='" + numStudents + "' value='" + value + "' data-label='" + label + "'>" + label + "</option>";
  };

  var populateStateOptions = function(states) {
    stateDropdown.empty();
    stateDropdown.append(optionHTML("Select State", ""));
    $.each(states, function(idx, state) {
      stateDropdown.append(optionHTML(state, state));
    });
  };

  var populateDistrictOptions = function(state, data) {
    districtDropdown.empty();
    districtDropdown.append(optionHTML("Select School District", ""));
    $.each(districtsForState(state, data), function(idx, district) {
      districtDropdown.append(optionHTML(district.name, district.bw_per_student, district.num_student));
    });
  };

  var selectedDistrict = function() {
    return $("option:selected", districtDropdown);
  };

  $.get('/data', function(data) {
    populateStateOptions(extractStates(data));

    $("#state-dropdown").on('change', function() {
      var state = $(this).val();
      populateDistrictOptions(state, data);
    });
  });

  window.videoLoader.reload = function() {
    var bw = Math.floor(districtDropdown.val()),
        name = selectedDistrict().text();
        numStudents = districtDropdown.find('option')[1].id
        lostTime = Math.floor((48 * numStudents * 180) / 3600)

    $('.district-bw').text(bw);
    $('#district-name').text(name);
    $('.calculated-lost-time').text(lostTime)

    $("#video-player source.mp4").attr('src', '/video?kbps=' + bw);
  };
});

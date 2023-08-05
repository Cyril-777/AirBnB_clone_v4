$(document).ready(function() {
    let selectedAmenities = {};

    $('input[type="checkbox"]').change(function() {
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        updateAmenitiesList();
    });

    function updateAmenitiesList() {
        const amenitiesList = Object.values(selectedAmenities).join(', ');
        $('.amenities h4').text(`Amenities: ${amenitiesList}`);
    }

	$.getJSON("http://0.0.0.0:5001/api/v1/status/", (data) => {
		if (data.status === "OK") {
			$("div#api_status").addClass("available");
		} else {
			$("div#api_status").removeClass("available");
		}
	});
});
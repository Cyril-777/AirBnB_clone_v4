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
});
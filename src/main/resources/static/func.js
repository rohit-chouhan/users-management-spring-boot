$("#update").hide();
$("#save").show();
///Clicking on Add New Button
$("#add_user").click(function () {
    $("#exampleModalLabel").text("Add New User");
    $("#id").prop("readonly", false);
    $("#update").hide();
    $("#save").show();
});

///Clicking on Get User by Id Button
$("#user_by_id").click(function () {
    $("#exampleModalLabel").text("Find User by ID");
    $("#update").hide();
    $("#save").hide();
});

/// Deleting User Function
function dlt(id) {
    if (confirm("Are you sure you want to delete this user?")) {
        $.ajax({
            url: 'http://localhost:8080/delete?id=' + id,
            dataType: 'json',
            type: 'delete',
            contentType: 'application/json',
            success: function (data, textStatus, jQxhr) {
                alert("User Deleted!");
                location.reload();
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    }
}


/// Clicking on Update Button
function update(id) {
    $("#update").show();
    $("#save").hide();
    $('#exampleModal').modal('show');
    $("#exampleModalLabel").text("Update User");
    $("#id").prop("readonly", true);
    $.get("http://localhost:8080/single?id=" + id, function (data, status) {
        $("#id").val(data.id);
        $("#name").val(data.name);
        $("#age").val(data.age);
        $("#email").val(data.email);
    });
}

/// get user by id function
function get_user(id) {
    $("#update").hide();
    $("#save").hide();
    $('#exampleModal').modal('show');
    $.get("http://localhost:8080/single?id=" + id, function (data, status) {
        if (data != null) {
            $("#id").val(data.id);
            $("#name").val(data.name);
            $("#age").val(data.age);
            $("#email").val(data.email);
            
        } else {
            $("#name").val(" ");
            $("#age").val(" ");
            $("#email").val(" ");
            $("#save").show();
        }
    });
}

///Clicking on Save Button
$("#save").click(function () {
    $("#save").text("Adding...");
    $.ajax({
        url: 'http://localhost:8080/save',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            "id": $("#id").val(),
            "name": $("#name").val(),
            "age": $("#age").val(),
            "email": $("#email").val()
        }),
        success: function (data, textStatus, jQxhr) {
            alert("New User Added!");
            $("#save").text("Add Now");
            clearField();
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
            $("#save").text("Add Now");
        }
    });
});

//Clicking on Update Button
$("#update").click(function () {
    $("#update").text("Updating...");
    $.ajax({
        url: 'http://localhost:8080/save',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            "id": $("#id").val(),
            "name": $("#name").val(),
            "age": $("#age").val(),
            "email": $("#email").val()
        }),
        success: function (data, textStatus, jQxhr) {
            alert("User Updated");
            $("#update").text("Update Now");
            clearField();
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
            $("#update").text("Update Now");
        }
    });
});

//Cleaning all fields
function clearField() {
    $("#id").val("");
    $("#name").val("");
    $("#age").val("");
    $("#email").val("");
}
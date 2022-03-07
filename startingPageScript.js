function initialize()
{
    generateSelectionPage();
}

function generateSelectionPage()
{
    fetch("classes.txt")
        .then(response => response.text())
        .then(function(text)
            {
                return text.split(",");
            })
        .then(createClasses)
}

function createClasses(classes)
{
    let classContainer = document.createElement("FORM");
    for(let i of classes)
    {
        let containerSpan = document.createElement("DIV");
        let checkBox = document.createElement("INPUT");
        let nameLabel = document.createElement("LABEL");
        
        checkBox.type = "checkBox";
        checkBox.name = i;
        checkBox.value = i;
        checkBox.id = i;
        
        nameLabel.for = i;
        nameLabel.innerHTML = i;
        
        containerSpan.appendChild(checkBox);
        containerSpan.appendChild(nameLabel);
        classContainer.appendChild(containerSpan);
    }
    let submitButton = document.createElement("INPUT")
    submitButton.type = "submit";
    classContainer.method = "POST";
    classContainer.action = "C:\Users\1101703\OneDrive - Brevard Public Schools\Documents\NetBeansProjects\caseStudy3\selectedClasses.html"
    classContainer.appendChild(submitButton);
    document.getElementById("body").appendChild(classContainer);
}



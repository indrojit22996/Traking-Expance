const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", () => {
  const expenceAmountValue = document.querySelector(".amountvalue").value;
  const descriptionValue = document.querySelector(".description").value;
  const categoryValue = document.querySelector(".category");
  // Showing The Opction text
  let categoryValueText =
    categoryValue.options[categoryValue.selectedIndex].text;

  // Creating a Object
  const User = {
    expenceAmountValue: expenceAmountValue,
    descriptionValue: descriptionValue,
    categoryValueText: categoryValueText,
  };
  // Add Local Storage
  localStorage.setItem(User.descriptionValue, JSON.stringify(User));
  let display = document.querySelector(".dis");

  let li = document.createElement("li");
  li.className = "container";

  li.textContent = JSON.stringify(
    User.expenceAmountValue +
      " - " +
      User.descriptionValue +
      " - " +
      User.categoryValueText
  );
  li.style.listStyle = "none";
  li.style.color = "#fff";
  li.style.fontWeight = "bold";
  display.appendChild(li);
  // create delete Button
  const delButton = document.createElement("button");
  delButton.textContent = "Delete Expence";
  display.appendChild(delButton);
  // create edit Button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit Expence";
  display.appendChild(editButton);
  // Delete Function
  delButton.addEventListener("click", () => {
    display.removeChild(li);
    display.removeChild(delButton);
    display.removeChild(editButton);
  });
  // Edit Function
  editButton.addEventListener("click", () => {
    document.querySelector(".amountvalue").value = User.expenceAmountValue;
    document.querySelector(".description").value = User.descriptionValue;
    document.querySelector(".category").options[categoryValue.selectedIndex].text=User.categoryValueText;

  });


});

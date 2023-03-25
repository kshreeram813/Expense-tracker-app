function addExpenses(event) {
  const selectElements = document.querySelector("#select")
  event.preventDefault()
  const amount = event.target.expense.value

  const description = event.target.description.value

  var select = selectElements.options[selectElements.selectedIndex].value

  const obj = {
    amount,
    description,
    select,
  }
  localStorage.setItem(obj.description, JSON.stringify(obj))
  display(obj)
}

function display(obj) {
  const dispValues = document.getElementById("formElements")

  const data = document.createElement("li")
  data.textContent = `${obj.amount}--${obj.description}--${obj.select}`
  dispValues.appendChild(data)

  const deleteBtn = document.createElement("input")
  deleteBtn.type = "button"
  deleteBtn.value = "delete"

  data.appendChild(deleteBtn)

  deleteBtn.onclick = () => {
    localStorage.removeItem(obj.description)
    dispValues.removeChild(data)
  }

  const editBtn = document.createElement("input")
  editBtn.type = "button"
  editBtn.value = "edit"

  data.appendChild(editBtn)

  editBtn.onclick = () => {
    document.querySelector("#expense").value = obj.amount
    document.querySelector("#description").value = obj.description
    document.querySelector("#select").value = obj.select
    localStorage.removeItem(obj.description)
    dispValues.removeChild(data)
  }
}

// Local Storage To-Do
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const list = document.getElementById("todoList");
  list.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => {
      tasks.splice(tasks.indexOf(task), 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      loadTasks();
    };
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();
  if (task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
  }
}
loadTasks();

// Products Data
const products = [
  { name: "iPhone 15", category: "smartphone" },
  { name: "Samsung Galaxy S23", category: "smartphone" },
  { name: "OnePlus 11", category: "smartphone" },
  { name: "MacBook Pro", category: "laptop" },
  { name: "Dell XPS 13", category: "laptop" },
  { name: "HP Spectre x360", category: "laptop" },
  { name: "Levi’s Jeans", category: "fashion" },
  { name: "Nike T-Shirt", category: "fashion" },
  { name: "Adidas Hoodie", category: "fashion" }
];

function displayProducts(filtered) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-item";
    div.textContent = p.name;
    productList.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}
filterProducts();

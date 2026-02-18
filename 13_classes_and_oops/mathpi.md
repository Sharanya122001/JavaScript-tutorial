🧠 First: What Is a Property?
When we create an object:
const user = {
  name: "Sharanya"
};

Here:
user → object
name → property
"Sharanya" → value

But internally… 👀
JavaScript stores extra hidden information about each property.
That hidden information is called:Property Descriptor

🎁 What Is a Property Descriptor?
Think of it like a property’s ID card 🪪
It tells:
What is the value?
Can we change it?
Can we delete it?
Can we see it in a loop?

📦 What Does Object.getOwnPropertyDescriptor() Do?

It shows the full details (ID card) of a property.

🧪 Simple Example
const user = {
  name: "Sharanya"
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));

✅ Output:
{
  value: "Sharanya",
  writable: true,
  enumerable: true,
  configurable: true
}
🧩 Now Let’s Understand Each Property

1️⃣ value
👉 The actual value of the property
value: "Sharanya"

2️⃣ writable
👉 Can we change the value?
writable: true
If true → we can change it
If false → we cannot change it

Example:
user.name = "Rahul";
Works because writable is true.


3️⃣ enumerable
👉 Will it show in a loop?

Example:
for (let key in user) {
  console.log(key);
}
If enumerable = true → it appears
If false → it is hidden from loops



4️⃣ configurable
👉 Can we delete or modify this property?
If true → we can delete it
If false → we cannot delete it

Example:
delete user.name;
Works only if configurable = true.

🎯 Important: "Own Property"
getOwnPropertyDescriptor() only checks:
Properties directly inside the object
Not properties from prototype.
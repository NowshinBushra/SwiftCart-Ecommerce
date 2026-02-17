1) What is the difference between null and undefined?
 Ans:  undefined: মানে হচ্ছে variable declare করা হয়েছে কিন্তু এখনো কোনো value assign করা হয়নি। অর্থাৎ value নেই। Example: let money;
                   console.log(money);
   এখানে money আছে, কিন্তু কোনো value দেওয়া হয়নি।

null: হলো ইচ্ছাকৃতভাবে empty value সেট করা। যখন আমরা চাই কোনো variable-এ “কোনো মান নেই” সেটা বোঝাতে তখন null ব্যবহার করি।
__________________________________________________________________________________________________________________________
2) What is the use of the map() function in JavaScript? How is it different from forEach()?
 Ans:  map() এবং forEach() দুটোই array এর প্রতিটি element নিয়ে কাজ করে।
    - map() ব্যবহার করা হয় যখন আমরা existing array থেকে নতুন একটি modified array তৈরি করতে চাই।
    - forEach() শুধু loop চালায় কিন্তু নতুন কোনো array return করে না।
   
__________________________________________________________________________________________________________________________ 
3) What is the difference between == and ===?
Ans: == হলো loose equality operator। এটা compare করার সময় প্রয়োজন হলে type convert করে নেয়। then value compare করে
    অন্যদিকে === হলো strict equality operator। এটা value এবং type — দুটোই check করে, কোনো type conversion করে না।

__________________________________________________________________________________________________________________________
4) What is the significance of async/await in fetching API data?
 Ans:  async/await asynchronous code কে অনেক বেশি readable এবং সহজ করে দেয়।
    Example:
          const loadProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
};
এখানে async function-কে asynchronous করেছে। await ব্যবহার করার ফলে fetch() শেষ না হওয়া পর্যন্ত পরের লাইন execute হবে না। ফলে code sequential মনে হয়।

__________________________________________________________________________________________________________________________
5) Explain the concept of Scope in JavaScript (Global, Function, Block).
   Ans: Scope মানে হলো — একটা variable কোথায় access করা যাবে।
   Global Scope: যদি variable global level এ declare করা হয়, তাহলে সেটা পুরো program জুড়ে ব্যবহার করা যায়।
   Function Scope: Function এর ভিতরে declare করা variable শুধু সেই function এর মধ্যেই ব্যবহার করা যায়।
   Block Scope: let এবং const দিয়ে declare করা variable {} ব্লকের ভিতরে সীমাবদ্ধ থাকে।

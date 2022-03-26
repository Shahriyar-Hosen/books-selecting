import React from 'react';
import './AnswerTheQuestion.css';

const AnswerTheQuestion = () => {
    return (
        <div>
            <div className='Answer-the-question'>
                <div  className='Answer'>
                   <h3>রিয়েক্ট কিভাবে কাজ করে (How React Works)</h3>
                    <p>রিয়েক্ট একটি খুব জনপ্রিয় জাভাস্ক্রিপ্ট লাইব্রেরি। সাপ্তাহিক 5.5 মিলিয়নেরও বেশি ডাউনলোড হয়। </p>

                    <p>DOM (Document Object Model) এ যেকোন কোড পরিবর্তন করলে সাইট নতুন করে রি-রেন্ডার হয়ে। সে ক্ষেত্রে অনেক সময় লেগে যায়। রিয়েক্ট আমাদের এই সমস্যার সমাধান দিয়েছে। </p>

                    <p>রিয়েক্ট সাধারণত  original DOM আছে সেইটার সফট কপি তৈরি করে সেটাকে  রিয়েক্টের ভাষায় বলে virtual DOM। কোডের কোন  কম্পনেন্ট পরিবর্তন হলে রিয়েক্ট যে কম্পনেন্ট পরিবর্তন হয়েছে শুধু সেই কম্পনেন্ট কে  original DOM এবং virtual DOM পাশাপাশি রেখে দুটোর মধ্যে পার্থক্য করে শুধু যেই কম্পনেন্ট টি পরিবর্তন হয়েছে শুধু সেই কম্পনেন্ট টি original DOM এ পরিবর্তন করে।</p>
                    
                    <p>এই পদ্ধতিতে অনেক সময় কম লাগে এই কারনেই রিয়েক্টের এত জনপ্রিয়তা।</p>
                </div>
                <div  className='Answer'>
                    <h3>প্রপস এবং  স্টেট এর মধ্যে পার্থক্য (props vs state)</h3>
                        <h5>Props:</h5>
                        <p>Props হল তথ্য পাঠায়।
                        Props শুধুমাত্র পড়া যায়।
                        Props পরিবর্তন করা যায় না।
                        State এর ডাটা পাঠানোর ক্ষেত্রে Props ব্যবহার করা হয়।</p>

                        <h5>State:</h5>
                        <p>State আমরা যদি ওয়েবসাইটে কোন ইন্টারেক্ট করি তাহলে চেঞ্জ হইতে পারে বা হয়।
                        State যেখানে ডিক্লেয়ার করা হয় সেখানেই থাকে।
                        State asynchronous ভাবে চেঞ্জ হতে পারে।
                        State পরিবর্তন করতে this.setState() ব্যবহার করা হয়।</p>

                        <p>যে কম্পনেন্টে State চেঞ্জ করা হয় তাকে stateful কম্পনেন্ট বলে।
                        আর Props কে stateless কম্পনেন্ট বলে। Props কে যা দেওয়া হয় তাই পাঠায়। এটা কে presentational  কম্পনেন্টও বলা হয় মাঝেমধ্যে।</p>
                </div>
            </div>
        </div>
    );
};

export default AnswerTheQuestion;
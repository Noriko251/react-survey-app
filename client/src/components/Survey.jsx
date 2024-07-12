//Survey.js
import React, { useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const Survey = () => {
    const [result, setResult] = useState({
        name: "",
        age: "",
        class: "",
        interest: [],
        review: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setResult({
          ...result,
          [name]: value
        });
      }; 

    const handleCheckboxChange = (e) => {
        const interest = result.interest;
        const value = e.target.value;
        if (e.target.checked){
            interest.push(value);
            setResult({
                ...result,
                interest: interest
            });
        } else {
            const index = interest.indexOf(value);
            interest.splice(index, 1);
            setResult({
                ...result,
                interest: interest
            });
        }
    };
    
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {result};
            const response = await fetch("http://localhost:4000/student", {
                method: "POST",
                headers: { "content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/thankyou";
        } catch(err) {
            console.error(err.message);
        }
    };

    return(
        <>
        <form className="survey" onSubmit={onSubmitForm}>
        <ol>
        <li>
        <div className="chileName">
        <h3>お子様のお名前</h3>
        <input type="text" name="name" value={result.name} onChange={handleInputChange}></input>
        </div>
        </li>
        <li>
        <div>
        <h3>お子様の学年</h3>
        <select type="text" name="age" value={result.age} onChange={handleInputChange}>
            <option value="">学年をお選びください</option>
            <option value="1歳">１歳</option>
            <option value="2歳">２歳</option>
            <option value="3歳">３歳</option>
            <option value="年少">年少</option>
            <option value="年中">年中</option>
            <option value="年長">年長</option>
            <option value="小1">小１</option>
            <option value="小2">小２</option>
            <option value="小3">小３</option>
            <option value="小4">小４</option>
            <option value="小5">小５</option>
            <option value="小6">小６</option>
            <option value="中1">中１</option>
            <option value="中2">中２</option>
            <option value="中3">中３</option>
        </select>
        </div>
        </li>
        <li>
        <div>
            <h3>どのクラスへのご入会をご希望ですか？</h3>
            <select type="text" name="class" value={result.class} onChange={handleInputChange}>
                <option value="">クラスをお選びください</option>
                <option value="English">英語クラス</option>
                <option value="Music">音楽クラス</option>
                <option value="Both">英語クラスと音楽クラス</option>
            </select>
        </div>
        </li>
        <li>
        <div>
            <h3>どなたが英語または音楽に興味をお持ちですか?</h3>
            <label>
                <input type="checkbox" name="interest" value="Child" onChange={handleCheckboxChange}></input>
                お子様
            </label>
            <label>
                <input type="checkbox" name="interest" value="Mother" onChange={handleCheckboxChange}></input>
                お母様
            </label>
            <label>
                <input type="checkbox" name="interest" value="Father" onChange={handleCheckboxChange}></input>
                お父様
            </label>
        </div>
        </li>
        <li>
        <div>
            <h3>本日の体験レッスンのご感想をお聞かせください。</h3>
            <textarea className="review-box" name="review" onChange={handleInputChange}></textarea>
        </div>
        </li>
        </ol>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Button type="submit" variant="contained" color="success">送信</Button>
        </Box>
        </form>
        </>
    );
}

export default Survey;
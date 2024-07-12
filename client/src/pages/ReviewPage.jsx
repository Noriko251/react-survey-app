//ReviewPage.js

import React, { useState, useEffect } from "react";
import ExcelJS from "exceljs";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const ReviewPage = () => {
    const [data, setData] = useState(null);
    const exportData = async e => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/review");
            const data = await response.json();
            const list = data.rows;
            const workbook = new ExcelJS.Workbook();
            workbook.addWorksheet('My Sheet');
            const worksheet = workbook.getWorksheet('My Sheet');
            worksheet.columns = [
                { header: 'ID', key: 'id' },
                { header: '名前', key: 'name' },
                { header: '学年', key: 'age' },
                { header: 'クラス', key: 'class' },
                { header: '興味', key: 'interest' },
                { header: '感想', key: 'review' },
              ];
              for (let i = 0; i < data.rows.length; i++){
                worksheet.addRow(list[i]);
              }
            // UInt8Arrayを生成
            const uint8Array = await workbook.xlsx.writeBuffer();
            // Blob
            const blob = new Blob([uint8Array], {type: 'application/octet-binary'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `アンケート結果.xlsx`;
            a.click();
            // ダウンロード後は不要なのでaタグを除去
            a.remove()
            // window.location = "/review";
        } catch(err) {
            console.error(err.message);
        }
    };


    return(
        <>
        <Title />
        <h3 className="teachersPageTitle">講師専用ページ</h3>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Button variant="contained" color="success" sx={{m:3}} onClick={exportData}>データをcsvファイルにエクスポート</Button>
            <Button variant="contained" color="success"><Link to="/">Top Page</Link></Button>
        </Box>
        <Footer />
        </>
    );
};

export default ReviewPage;
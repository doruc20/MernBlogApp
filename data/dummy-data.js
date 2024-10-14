const Category = require("../models/category");
const Blog = require("../models/blog");
const slugField = require("../helpers/slugfield");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const Role = require("../models/role");

async function populate() {
    const count = await Category.count();
    
    if(count == 0) { 
        
        const users= await User.bulkCreate([
            {fullname:"Dilaver Oruç", email:"info@dilaveroruc.com", password: await bcrypt.hash("123456",10)},
            {fullname:"Doğukan Oruç", email:"info@dogukanoruc.com", password: await bcrypt.hash("123456",10)},
            {fullname:"Kutalmış Oruç", email:"info@kutalmisoruc.com", password: await bcrypt.hash("123456",10)},
            {fullname:"Arda Oruç", email:"info@ardaoruc.com", password: await bcrypt.hash("123456",10)},
            {fullname:"Ahmet Oruç", email:"info@ahmetoruc.com", password: await bcrypt.hash("123456",10)},
        ]);


        const roles = await Role.bulkCreate([
            {rolename:"admin"},
            {rolename:"moderatör"},
            {rolename:"guest"},
        ]);
        await users[0].addRole(roles[0]); // admin => dilaveroruc

        await users[1].addRole(roles[1]); // moderatör => dogukanoruc 
        await users[2].addRole(roles[1]); // moderatör => kutalmisoruc

        await users[3].addRole(roles[2]); // guest => ardaoruc
        await users[4].addRole(roles[2]); // guest => ahmetoruc






        const categories = await Category.bulkCreate([
            { name: "Web Geliştirme",url:slugField("Web Geliştirme")},
            { name: "Mobil Geliştirme",url:slugField("Mobil Geliştirme")},
            { name: "Programlama",url:slugField("Programlama") }
        ]);
        
        const blogs = await Blog.bulkCreate([
            {
                baslik: "Komple Uygulamalı Web Geliştirme Eğitimi",
                url:slugField("Komple Uygulamalı Web Geliştirme Eğitimi"),
                altbaslik: "Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
                aciklama: "Web geliştirme komple bir web sitesinin hem web tasarım (html,css,javascript), hem de web programlama (asp.net mvc) konularının kullanılarak geliştirilmesidir. Sadece html css kullanarak statik bir site tasarlayabiliriz ancak işin içine bir web programlama dilini de katarsak dinamik bir web uygulaması geliştirmiş oluruz.",
                resim: "1.jpeg",
                anasayfa: true,
                onay: true,
                userId:2

           
            },
            {
                baslik: "Python ile Sıfırdan İleri Seviye Python Programlama",
                url:slugField("Python ile Sıfırdan İleri Seviye Python Programlama"),
                altbaslik: "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
                aciklama: "Python, son zamanların en popüler programlama dili haline geldi. Python' ın bu kadar popüler olmasındaki sebep şüphesiz öğrenmesi kolay bir yazılım dili olmasıdır.sadikturan adreslerinde paylaşmış olduğum python dersleri serisini takip ederek ister video ister yazılı kaynaklar yardımıyla kısa zamanda python programlama alanında uzmanlık kazanın ve hayal ettiğiniz projeyi gerçekleştirin.",
                resim: "2.jpeg",
                anasayfa: true,
                onay: true,
                userId:2
            },
            {
                baslik: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
                url:slugField("Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+"),
                altbaslik: "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
                aciklama: "Python, son zamanların en popüler programlama dili haline geldi. Python' ın bu kadar popüler olmasındaki sebep şüphesiz öğrenmesi kolay bir yazılım dili olmasıdır.sadikturan adreslerinde paylaşmış olduğum python dersleri serisini takip ederek ister video ister yazılı kaynaklar yardımıyla kısa zamanda python programlama alanında uzmanlık kazanın ve hayal ettiğiniz projeyi gerçekleştirin.",
                resim: "3.jpeg",
                anasayfa: true,
                onay: true,
                userId:2
            },
            {
                baslik: "Node.js ile Sıfırdan İleri Seviye Web Geliştirme",
                url:slugField("Node.js ile Sıfırdan İleri Seviye Web Geliştirme"),
                altbaslik: "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
                aciklama: "Python, son zamanların en popüler programlama dili haline geldi. Python' ın bu kadar popüler olmasındaki sebep şüphesiz öğrenmesi kolay bir yazılım dili olmasıdır.sadikturan adreslerinde paylaşmış olduğum python dersleri serisini takip ederek ister video ister yazılı kaynaklar yardımıyla kısa zamanda python programlama alanında uzmanlık kazanın ve hayal ettiğiniz projeyi gerçekleştirin.",
                resim: "2.jpeg",
                anasayfa: true,
                onay: true,
                userId:3
            },
            {
                baslik: "Python ile Sıfırdan İleri Seviye Python Programlama",
                url:slugField("Python ile Sıfırdan İleri Seviye Python Programlama"),
                altbaslik: "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
                aciklama: "Python, son zamanların en popüler programlama dili haline geldi. Python' ın bu kadar popüler olmasındaki sebep şüphesiz öğrenmesi kolay bir yazılım dili olmasıdır.sadikturan adreslerinde paylaşmış olduğum python dersleri serisini takip ederek ister video ister yazılı kaynaklar yardımıyla kısa zamanda python programlama alanında uzmanlık kazanın ve hayal ettiğiniz projeyi gerçekleştirin.",
                resim: "1.jpeg",
                anasayfa: true,
                onay: true,
                userId:3
            },
            {
                baslik: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
                url:slugField("Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+"),
                altbaslik: "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
                aciklama: "Python, son zamanların en popüler programlama dili haline geldi. Python' ın bu kadar popüler olmasındaki sebep şüphesiz öğrenmesi kolay bir yazılım dili olmasıdır.sadikturan adreslerinde paylaşmış olduğum python dersleri serisini takip ederek ister video ister yazılı kaynaklar yardımıyla kısa zamanda python programlama alanında uzmanlık kazanın ve hayal ettiğiniz projeyi gerçekleştirin.",
                resim: "2.jpeg",
                anasayfa: true,
                onay: true,
                userId:3
            },
            {
                baslik: "Node.js ile Sıfırdan İleri Seviye Web Geliştirme",
                url:slugField("Node.js ile Sıfırdan İleri Seviye Web Geliştirme"),
                altbaslik: "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
                aciklama: "Python, son zamanların en popüler programlama dili haline geldi. Python' ın bu kadar popüler olmasındaki sebep şüphesiz öğrenmesi kolay bir yazılım dili olmasıdır.sadikturan adreslerinde paylaşmış olduğum python dersleri serisini takip ederek ister video ister yazılı kaynaklar yardımıyla kısa zamanda python programlama alanında uzmanlık kazanın ve hayal ettiğiniz projeyi gerçekleştirin.",
                resim: "1.jpeg",
                anasayfa: true,
                onay: true,
                userId:3
            }        ,
            {
                baslik: "Python ile Sıfırdan İleri Seviye Python Programlama",
                url:slugField("Python ile Sıfırdan İleri Seviye Python Programlama"),
                altbaslik: "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
                aciklama: "Python, son zamanların en popüler programlama dili haline geldi. Python' ın bu kadar popüler olmasındaki sebep şüphesiz öğrenmesi kolay bir yazılım dili olmasıdır.sadikturan adreslerinde paylaşmış olduğum python dersleri serisini takip ederek ister video ister yazılı kaynaklar yardımıyla kısa zamanda python programlama alanında uzmanlık kazanın ve hayal ettiğiniz projeyi gerçekleştirin.",
                resim: "3.jpeg",
                anasayfa: true,
                onay: true,
                userId:3
            },
            {
                baslik: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
                url:slugField("Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+"),
                altbaslik: "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
                aciklama: "Python, son zamanların en popüler programlama dili haline geldi. Python' ın bu kadar popüler olmasındaki sebep şüphesiz öğrenmesi kolay bir yazılım dili olmasıdır.sadikturan adreslerinde paylaşmış olduğum python dersleri serisini takip ederek ister video ister yazılı kaynaklar yardımıyla kısa zamanda python programlama alanında uzmanlık kazanın ve hayal ettiğiniz projeyi gerçekleştirin.",
                resim: "3.jpeg",
                anasayfa: true,
                onay: true,
                userId:3
            },
            {
                baslik: "Node.js ile Sıfırdan İleri Seviye Web Geliştirme",
                url:slugField("Node.js ile Sıfırdan İleri Seviye Web Geliştirme"),
                altbaslik: "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
                aciklama: "Python, son zamanların en popüler programlama dili haline geldi. Python' ın bu kadar popüler olmasındaki sebep şüphesiz öğrenmesi kolay bir yazılım dili olmasıdır.sadikturan adreslerinde paylaşmış olduğum python dersleri serisini takip ederek ister video ister yazılı kaynaklar yardımıyla kısa zamanda python programlama alanında uzmanlık kazanın ve hayal ettiğiniz projeyi gerçekleştirin.",
                resim: "3.jpeg",
                anasayfa: true,
                onay: true,
                userId:3
            }                
        
        ]);



            await categories[0].addBlog(blogs[0]);
            await categories[0].addBlog(blogs[1]);
            await categories[1].addBlog(blogs[2]);
            await categories[1].addBlog(blogs[3]);
            await categories[2].addBlog(blogs[2]);
            await categories[2].addBlog(blogs[3]);
            await categories[0].addBlog(blogs[4]);
            await categories[0].addBlog(blogs[5]);
            await categories[0].addBlog(blogs[6]);
            await categories[1].addBlog(blogs[7]);
            await categories[1].addBlog(blogs[8]);
            await categories[0].addBlog(blogs[9]);

            
            await blogs[0].addCategory(categories[1]);        
            
    }

}

module.exports = populate;
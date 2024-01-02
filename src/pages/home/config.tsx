import { BookType } from "../../components/Book"
import './index.css'

const bookList:BookType[] = [{
    nameCover:'🚀 博主信息',
    handleClick:()=>{},
    children: <div className="bookContent">
        <p>"🚀 前端探险家 ✨"</p>
        <div className="bookChild">你好！我是一名热衷于前端技术的博主。</div>
        <div className="bookChild">一晃五六年，在前端这个坑中，积累了一定的经验和认知。</div>
        <div className="bookChild">我的博客旨在分享关于JavaScript、React、Vue等前端技术的深度见解和实用教程。</div>
     </div>
},{
    nameCover:'🌐 技能架构',
    handleClick:()=>{},
    children: <div className="bookContent">
        <p>"🌐 知识体系 ✨"</p>
        <div className="bookChild">此板块为前端的主流知识体系</div>
        <div className="bookChild">博主用树形结构图将知识点串联起来，生成了完整的知识体系的。</div>
        <div className="bookChild">💡小Tips: 点击叶子节点可能会有意想不到的收获哟！</div>
    </div>
},{
    nameCover:'🎨CSS技能',
    handleClick:()=>{},
    children: <div className="bookContent">
        <p>"🎨CSS3-技能✨"</p>
        <div className="bookChild">欢迎来到我的 CSS3 特效展示版块！</div>
        <div className="bookChild">在这里，我将为你呈现一些炫酷的 CSS3 特效，带你一起探索前端的无限可能性!</div>
        <div className="bookChild">这些特效不仅仅是视觉盛宴，还是我在前端开发中应用的实际案例。</div>
    </div>
},{
    nameCover:'⚛️React',
    handleClick:()=>{},
    children: <div className="bookContent">
        <p>"⚛️React✨"</p>
        <div className="bookChild">欢迎来到我的 React 实战版块！</div>
        <div className="bookChild">在这里，我将分享一些我在前端项目中使用 React 时的实际经验和优秀实现方案。</div>
        <div className="bookChild">探讨如何构建可维护、性能优越的 React 应用。</div>
    </div>
},{
    nameCover:'🖖Vue',
    handleClick:()=>{},
    children: <div className="bookContent">
        <p>"🖖Vue✨"</p>
        <div className="bookChild">欢迎来到我的 Vue 实践版块！</div>
        <div className="bookChild">在这里，我将分享一些我在前端项目中使用 Vue 时的实际经验和一些令人印象深刻的实现方案。</div>
        <div className="bookChild">探索如何构建出具有灵活性和高性能的 Vue 应用。</div>
    </div>
},{
    nameCover:'💻Electron',
    handleClick:()=>{},
    children: <div className="bookContent">
        <p>"💻Electron✨"</p>
        <div className="bookChild">欢迎来到我的 Electron 实战经验分享版块！</div>
        <div className="bookChild">在这里，我将分享一些我在前端项目中使用Electron一些令人印象深刻的实现方案。</div>
        <div className="bookChild">探索如何构建出功能丰富、跨平台的桌面应用。</div>
    </div>
},{
    nameCover:'📊数据结构',
    handleClick:()=>{},
    children: <div className="bookContent">
        <p>"📊数据结构✨"</p>
        <div className="bookChild">欢迎来到我的前端算法探索版块！</div>
        <div className="bookChild">在这里，我将介绍一些基础算法的理念、应用场景以及在前端领域中的实际应用。</div>
        <div className="bookChild">我们将深入探讨如何在前端项目中应用算法，以提高性能和解决各种问题。</div>
    </div>
},{
    nameCover:'📦工程搭建',
    handleClick:()=>{},
    children: <div className="bookContent">
        <p>"📦工程搭建✨"</p>
        <div className="bookChild">欢迎来到工程搭建版块！</div>
        <div className="bookChild">Webpack等工具的实际应用场景以及在前端项目中的重要作用。</div>
        <div className="bookChild">一个强大的模块打包工具，有利于管理项目中的资源，还能提高性能、优化代码。</div>
    </div>
},{
    nameCover:'🚀Node',
    handleClick:()=>{},
    children: <div className="bookContent">
        <p>"🚀Node✨"</p>
        <div className="bookChild">欢迎来到Node版块！我将介绍Node实际应用场景以及在前端项目中的关键作用。</div>
        <div className="bookChild">Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，他在前后端都发挥了巨大作用。</div>
    </div>
},{
    nameCover:'🧠AIGC',
    handleClick:()=>{},
    children: <div className="bookContent">
        <p>"🧠AIGC✨"</p>
        <div className="bookChild">博主比较喜欢一些新的事物，比如AIGC</div>
        <div className="bookChild">没事喜欢研究SD，MJ的一些最新技术。</div>
        <div className="bookChild">此板块就随手发发我自己的一些好的作品吧！</div>
    </div>
},{
    nameCover:'🎲3D-Three',
    handleClick:()=>{},
    children: <div className="bookContent">
        <p>"🎲3D-Three✨"</p>
        <div className="bookChild">欢迎来到我的 Three.js 版块！</div>
        <div className="bookChild">在这里，我将介绍 Three.js 的核心概念、实际应用场景。</div>
        <div className="bookChild">Three.js 是一个强大的 JavaScript 3D库，它使得在浏览器中创建令人惊叹的三维图形变得更加容易。</div>
    </div>
},{
    nameCover:'🎲小程序应用',
    handleClick:()=>{},
    children: <div className="bookContent">
        <p>"🎲3D-Three✨"</p>
        <div className="bookChild">欢迎来到我的 小程序 版块！</div>
        <div className="bookChild">在这里，我将介绍 Three.js 的核心概念、实际应用场景。</div>
        <div className="bookChild">Three.js 是一个强大的 JavaScript 3D库，它使得在浏览器中创建令人惊叹的三维图形变得更加容易。</div>
    </div>
}]

export default bookList
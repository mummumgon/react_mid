import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'yg-jalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	font-size:20px;
	background-color: ${props=>props.theme.coinColor.bgColor};
	color:${props=>props.theme.coinColor.textColor};
	*{
		font-family: 'yg-jalnan','Sans-serif','serif';
	}
}
ol, ul , li {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
*{box-sizing:border-box}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
	text-decoration:none;
	color: ${props=>props.theme.coinColor.textColor};

}
input[type="text"],input[type="password"] , input[type="email"]{
	width: 100%;
	padding: 6px 10px;
	border: 3px solid transparent;
}
input.success{
	border-color: #5dda5d;
} 
input.error{
	border-color: red;
} 
.c_label{
	display: inline-block;
	min-width: 80px;
}
.r_label{
	display: inline-block;
	min-width: 80px;
}
/* 공통 */
.header{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 50px;
	z-index: 100;
	padding: 0 20px;
	background-color: #999;
	nav{
		height: 100%;
		width: 100%;
	button{
		display: block;
		padding: 10px 10px 8px; 
		border-radius:5px;
		line-height: 1;
		color:${props=>props.theme.coinColor.bgColor};
		background-color:${props=>props.theme.coinColor.textColor};
	}
}
}
.container{
	max-width: 500px;
  width: 100%;
  padding: 20px;
  margin: 50px auto;
}
.title{
	font-size:32px;
  text-align: center;
  padding: 25px 0;
  margin: 25px 0;
}.dot{
	border-top:2px dotted #eee;
border-bottom:2px dotted #eee;
}

.dest{
	display: block;
	margin: 30px 0;
	text-align: center;
	font-size: 24px;
	color: ${props => props.theme.coinColor.textColor};
}

/* 리스트타입 */
.list_type{
	li{
		margin: 20px 0;
      overflow: hidden;
	  > a , > button{
			background-color: ${props => props.theme.coinColor.textColor};
			color: ${props => props.theme.coinColor.bgColor};
			border-radius: 10px;
		}
	  a , button{
		  display: flex;
		  align-items: center;
		  justify-content: space-between;
		  width: 100%;
		  padding: 10px 20px;
		  font-size:20px;
		  line-height: 30px;
			border: 0;
			cursor: pointer;
			:hover{
				color: ${props => props.theme.coinColor.activeColor};
			}
			:hover em:last-child{
					animation: tranLR 1 .3s both;
				}
			}
			em{ transition: translateX 0.3s;}
			img{
				height: 30px;
			}
        }
	
		.depth2{
			 > a, >button{
				background-color: transparent;
				color: ${props => props.theme.coinColor.textColor};
				border-bottom: 1px solid ${props => props.theme.coinColor.textColor};
				padding: 10px 20px;
			}
		}
    }
	/* 폼리스트타입 */
	.form_type{
		li{
			margin: 20px 0;
			.label{
				display: block;
				padding: 10px 0;
				color: #47e2fb;
			}.pb20{
				padding-bottom: 20px;
			}
			.c_label{
				margin: 10px 0;
			}
		}
	}

	/* 정렬 */
	.flex_btw{display:flex; 
		align-items:center; 
		justify-content:space-between
	}

	/* animation */
	@keyframes tranLR {
	0%{transform:translateX(0)}
	50%{transform:translateX(10px)}
	100%{transform:translateX(0px)}
	}
`;


function GlovalStyle(){
	return <GlobalStyle/>
}

export default GlovalStyle;
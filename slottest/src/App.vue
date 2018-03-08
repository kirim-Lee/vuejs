<template>
  <div id="app">
    <speech-box :header-text="A.header" :footer-text="A.footer">
		<div>
			<p>
				{{A.message}}
			</p>
		</div>
	</speech-box>
	  <speech-box class="sanders" :header-text="B.header" :footer-text="B.footer">
		  <div>
			  <p class="sanders-content">
				  {{B.message}}
			  </p>
		  </div>
	  </speech-box>
  </div>
</template>

<script>
import SpeechBox from "./components/SpeechBox";

export default {
	components: {SpeechBox},
	name: 'app',
	data () {
		return {
			A:{
				header:"오바마 대통령 고별 연설문",
				footer:"2017.01.10 - 시카고",
				message:"저의 동료 국민 여러분, 미셀과 저는 지난 몇 주간 우리가 받은 모든 축복의 인사에 너무 감동받았습니다. 하지만 오늘 밤은 제가 감사의 인사를 할 차례입니다."
			},
			B:{
				header:"버니샌더스 경선 패배 연설물",
				footer:"2016.07.25 - 필라델피아 웰스파고",
				message:"감사합니다. 여러분 정말 감사합니다. ....(지면관계상 생략)"
			}
		}
	}
}
</script>

<style>
.sanders{background:antiquewhite;}
	.sanders-content{font-family: "굴림",sans-serif; text-decoration: underline;}
</style>

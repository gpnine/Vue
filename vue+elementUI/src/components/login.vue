<template>
	<div class="outer">
		<img src="../assets/logo2.png">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
			<el-form-item prop="name">
				<el-input type="text" size="medium" v-model="ruleForm.name"  autocomplete="off" placeholder="请输入账号"></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input type="password" size="medium" v-model="ruleForm.password" placeholder="请输入密码" ></el-input>
			</el-form-item>
			<p class="pText">新用户登录即自动注册，并表示已同意<a style="color: #409EFF;" href="#">《用户服务协议》</a></p>
			<el-form-item>
				<el-button type="success" @click="onSubmit('ruleForm')">登录</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
		data(){
			var checkName = (rule,value,callback) => {
				if (value === '') {
		          callback(new Error('请输入账号'));
		        }else {
		          	callback();
		        }
			};
			var checkPassword = (rule,value,callback) => {
				if (value === '') {
		          callback(new Error('请输入密码'));
		        }else {
		          callback();
		        }
			};
		    return {
		    	ruleForm: {
		    		name:'',
	    			password:''
		    	},
		    	rules: {
		    		name:[
		    			{validator:checkName, trigger: 'blur'}
		    		],
		    		password:[
		    			{validator:checkPassword, trigger: 'blur'}
		    		]
	    		}
	    	}

		},
		methods:{
			onSubmit(formName){
				this.$refs[formName].validate((valid) => {
					if(valid){
						window.localStorage.setItem('name', this.ruleForm.name);
						this.$router.push({path: '/Home'});
					}else{
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName){
				 if (this.$refs[formName]!==undefined) {
				     this.$refs[formName].resetFields();
				 }
			}
		}
	}
</script>

<style>
	.outer{
	    text-align: center;
	    width: 300px;
	    margin: 0 auto;
	    margin-top:100px;
	}
	.pText{
		margin-top: 12px;
	    color: #999;
	    font-size: 14px;
	    line-height: 20px;
        text-align: left;
	}
</style>

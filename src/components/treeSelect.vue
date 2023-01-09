<!--
  author:KinXpeng
  date:2020-5-20 09:24:00
  **** 使用案例
  <tree-select
    :options="treeData"
    :defaultProps="defaultProps"
    :clearable="true"
    :accordion="true"
    @selectNode="selectNode"
  ></tree-select>
  *** 1.options 为绑定的树状数据
  *** 2.defaultProps 为配置项，label和children
  *** 3.clearable 为是否可清除选择
  *** 4.accordion 为是否开启手风琴模式，只会展开一项
  *** 5.selectNode 为选中节点的回调函数，有两个参数（data，node），data为节点的数据
  *** 6.有清除按钮时，点击清除会触发selectNode函数，data为空，可通过判断data来设置选中的value为空
-->
<template>
	<div class="treeSelect">
		<el-select v-model="model" :size="size" :clearable="clearable" @clear="clearHandle" :popper-class="popperClass" placeholder="请选择" ref="tree_select">
			<el-option :value="model" :label="model" style="height: auto">
				<el-tree class="selectTree" :data="options" :show-checkbox="false" ref="selectTree" highlight-current :props="defaultProps" :accordion="accordion" @node-click="handleNodeClick">
					<div slot-scope="{ data }" class="'tree_label'">
						<span>{{ data.resourceName }}</span>
					</div>
				</el-tree>
			</el-option>
		</el-select>
	</div>
</template>

<script>
	export default {
		name: 'treeSelect',
		model: {
			prop: 'value',
			event: 'input'
		},
		props: {
			value: {
				type: [String, Number, Array, Object, Date]
			},
			size: {
				type: String,
				default: 'mini'
			},
			// 树结构数据
			options: {
				type: Array,
				default() {
					return []
				}
			},
			// 配置项
			defaultProps: {
				type: Object,
				default() {
					return {}
				}
			},
			// 清除
			clearable: {
				type: Boolean,
				default() {
					return false
				}
			},
			// 是否打开手风琴模式
			accordion: {
				type: Boolean,
				default() {
					return false
				}
			}
		},
		computed: {
			// 主要利用set来emit input 进行双向绑定 需要组件有input事件
			model: {
				get() {
					return this.value || ''
				},
				set(v) {
					this.$emit('input', v)
				}
			}
		},
		data() {
			return {
				selectValue: '',
				popperClass: 'tree_select',
				isShowSelect: false
			}
		},
		methods: {
			// 选中节点
			handleNodeClick(data, node) {
				if (data.servableSign == 1) {
					if (data.occupyState == 'IDL' && data._occupy_state == 0) {
						this.model = data[this.defaultProps.label]
						this.$emit('selectNode', data, node)
						this.$refs.tree_select.blur() // 选中后隐藏下拉框
					}
				}
			},
			// 清除选择回调函数
			clearHandle() {
				this.$emit('selectNode', {})
			}
		},
		created() {}
	}
</script>

<style lang="scss">
	.treeSelect {
		display: inline-block;
		width: 100%;
	}
	.tree_select {
		.el-select-dropdown__item {
			padding: 0;
			.el-tree-node__label,
			.tree_label {
				display: flex;
				justify-content: space-between;
				width: 80% !important;
				font-weight: normal;
				.server_state {
					position: relative;
					width: 30%;
					&::before {
						position: absolute;
						top: 16px;
						left: -16px;
						content: '';
						width: 8px;
						height: 8px;
						border-radius: 50%;
						background-color: #72c381;
					}
					& > span:last-child {
						opacity: 0;
					}
				}
				.state_busy {
					&::before {
						background-color: #d59550;
					}
					& > span:last-child {
						opacity: 1;
					}
				}
				&.item_busy {
					color: #c0c4cc;
					pointer-events: all;
					cursor: not-allowed;
				}
			}
			.el-tree-node {
				padding: 5px 0;
			}
		}
		.el-select-dropdown__item.hover {
			background: #fff;
			padding: 0;
			&:hover {
				background: #fff;
			}
		}
	}
	.hide {
		display: none !important;
	}
</style>

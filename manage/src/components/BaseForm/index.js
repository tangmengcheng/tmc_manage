import React, {Component} from 'react'
import { Input, Select, Form, Button, Checkbox, DatePicker} from 'antd'
import Util from '../../util/util.js';
const FormItem = Form.Item;

class FilterForm extends Component {

    handleFilterSubmit = ()=>{
        let fieldsValue = this.props.form.getFieldsValue();
        this.props.filterSubmit(fieldsValue);
    }

    reset = ()=>{
        this.props.form.resetFields();
    }

    initFormList = ()=>{
        const { getFieldDecorator } = this.props.form;
        const formList = this.props.formList;
        const formItemList = [];
        if (formList && formList.length>0){
            formList.forEach((item,i)=>{
                let label = item.label;
                let field = item.field;
                let initialValue = item.initialValue || '';
                let placeholder = item.placeholder;
                let placeholder1 = item.placeholder1;
                let width = item.width;
                if (item.type == '时间查询'){
                    const begin_time = <FormItem label="订单时间" key={field}>
                        {
                            getFieldDecorator('begin_time')(
                                <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss"/>
                            )
                        }
                    </FormItem>;
                    formItemList.push(begin_time)
                    const end_time = <FormItem label="~" colon={false} key={field}>
                        {
                            getFieldDecorator('end_time')(
                                <DatePicker showTime={true} placeholder={placeholder1} format="YYYY-MM-DD HH:mm:ss" />
                            )
                        }
                    </FormItem>;
                    formItemList.push(end_time)
                }else if(item.type == 'INPUT'){
                    const INPUT = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field],{
                                initialValue: initialValue
                            })(
                                <Input type="text" placeholder={placeholder} />
                            )
                        }
                    </FormItem>;
                    formItemList.push(INPUT)
                } else if (item.type == 'SELECT') {
                    const SELECT = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                initialValue: initialValue
                            })(
                                <Select
                                    style={{ width: width }}
                                    placeholder={placeholder}
                                >
                                    {Util.getOptionList(item.list)}
                                </Select>
                            )
                        }
                    </FormItem>;
                    formItemList.push(SELECT)
                } else if (item.type == 'CHECKBOX') {
                    const CHECKBOX = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                valuePropName: 'checked',
                                initialValue: initialValue //true | false
                            })(
                                <Checkbox>
                                    {label}
                                </Checkbox>
                            )
                        }
                    </FormItem>;
                    formItemList.push(CHECKBOX)
                }
            })
        }
        return formItemList;
    }
    render(){
        return (
            <Form layout="inline">
                { this.initFormList() }
                <FormItem>
                    <Button type="primary" style={{ margin: '0 20px' }} onClick={this.handleFilterSubmit}>查询</Button>
                    <Button onClick={this.reset}>重置</Button>
                </FormItem>
            </Form>
        );
    }
}
// 实现双向数据绑定功能
export default Form.create()(FilterForm);
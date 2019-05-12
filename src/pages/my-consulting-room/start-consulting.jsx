import React, {Component} from 'react';
import {Table} from 'antd';
import {
    QueryBar,
    QueryItem,
    ToolItem,
    Pagination,
    Operator,
    ToolBar,
} from "@/library/antd";
import PageContent from '@/layouts/page-content';
import config from '@/commons/config-hoc';
@config({
    path: '/start-consulting',
})
export default class StartConsulting extends Component {
    state = {
        loading: false,
        dataSource: [],
        total: 0,
        pageSize: 10,
        pageNum: 1,
        params: {},
        id: void 0,
        visible: false,
    };

    // TODO 查询条件
    queryItems = [
        [
            {
                type: 'input',
                field: 'inMno',
                label: '关键字',
            }
        ],
    ];

    // TODO 顶部工具条
    toolItems = [];

    columns = [
        {title: '宠物ID', dataIndex: 'petId'},
        {title: '昵称', dataIndex: 'name'},
        {title: '性别', dataIndex: 'gender'},
        {title: '年龄', dataIndex: 'age'},
        {title: '体重', dataIndex: 'weight'},
        {title: '检查时间', dataIndex: 'checkTime'},
        {title: '申请医院', dataIndex: 'applyHospital'},
        {title: '申请科室', dataIndex: 'applyKs'},
        {title: '操作技师', dataIndex: 'czjs'},
        {title: '检查部位', dataIndex: 'c1'},
        {title: '检查描述', dataIndex: 'c2'},
        {title: '临床诊断', dataIndex: 'c3'},
        {title: '诊断医师', dataIndex: 'zdys'},
        {title: '报告时间', dataIndex: 'createTime'},
        {title: '报告状态', dataIndex: 'state'},
        {
            title: '操作',
            key: 'operator',
            fixed: 'right',
            width: 150,
            render: (text, record) => {
                const {id, customerNo} = record;
                const successTip = `删除“${customerNo}”成功！`;
                const items = [
                    {
                        label: '阅片',
                        onClick: () => {
                            this.handleEdit(id);
                        },
                    },
                    {
                        label: '查看或编辑报告',
                        // color: 'red',
                        confirm: {
                            title: `您确定要删除“${customerNo}”？`,
                            onConfirm: () => {
                                this.setState({loading: true});
                                this.props.ajax
                                    .del(`/user-center/${id}`, null, {successTip})
                                    .then(() => this.handleSearch())
                                    .finally(() => this.setState({loading: false}));
                            },
                        },
                    },
                ];

                return (<Operator items={items}/>);
            },
        },
    ];

    componentDidMount() {
        this.handleSearch();
    }

    handleSearch = () => {
        const {params, pageNum, pageSize} = this.state;

        this.setState({loading: true});
        this.props.ajax
            .get('/mock/user-center', {...params, pageNum, pageSize})
            .then(res => {
                console.log(res);
                if (res) {
                    const {list: dataSource, total} = res;
                    this.setState({
                        dataSource,
                        total,
                    });
                }
            })
            .finally(() => this.setState({loading: false}));
    };

    handleAdd = () => {
        this.setState({id: void 0, visible: true});
    };

    handleEdit = (id) => {
        this.setState({id, visible: true});
    };

    render() {
        const {
            loading,
            dataSource,
            total,
            pageNum,
            pageSize,
            visible,
            id,
        } = this.state;

        return (
            <PageContent loading={loading}>
                <QueryBar>
                    <QueryItem
                        loadOptions={this.fetchOptions}
                        items={this.queryItems}
                        onSubmit={params => this.setState({params}, this.handleSearch)}
                    />
                </QueryBar>

                <ToolBar items={this.toolItems}/>

                <Table
                    columns={this.columns}
                    dataSource={dataSource}
                    rowKey="id"
                    pagination={false}
                />

                <Pagination
                    total={total}
                    pageNum={pageNum}
                    pageSize={pageSize}
                    onPageNumChange={pageNum => this.setState({pageNum}, this.handleSearch)}
                    onPageSizeChange={pageSize => this.setState({pageSize, pageNum: 1}, this.handleSearch)}
                />
            </PageContent>
        );
    }
}

import{j as e}from"./cn-BEAWT3tw.js";import{c as A,I as r,S as H}from"./search-D_YJT6Fe.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=A("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),O={title:"Components/Input",component:r,parameters:{layout:"centered",docs:{description:{component:"A flexible input component with support for labels, helper text, icons, and various states."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"The size of the input"},error:{control:"boolean",description:"Shows error state styling when true"},disabled:{control:"boolean",description:"Disables the input when true"},label:{control:"text",description:"Label text for the input"},helperText:{control:"text",description:"Helper text shown below the input"},placeholder:{control:"text",description:"Placeholder text for the input"}}},a={args:{placeholder:"Enter text..."}},s={args:{label:"Email Address",placeholder:"Enter your email",type:"email"}},t={args:{label:"Username",placeholder:"Enter username",helperText:"Must be at least 3 characters long"}},l={args:{label:"Password",placeholder:"Enter password",type:"password",error:!0,helperText:"Password must be at least 8 characters"}},o={args:{label:"Search",placeholder:"Search...",leftIcon:e.jsx(H,{size:16})}},n={args:{label:"Email",placeholder:"Enter your email",type:"email",rightIcon:e.jsx(R,{size:16})}},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[e.jsx(r,{size:"xs",placeholder:"Extra Small"}),e.jsx(r,{size:"sm",placeholder:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large"}),e.jsx(r,{size:"xl",placeholder:"Extra Large"})]}),parameters:{layout:"padded"}},i={args:{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0,helperText:"This field is currently disabled"}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,u,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email'
  }
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,b,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters long'
  }
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var f,E,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    error: true,
    helperText: 'Password must be at least 8 characters'
  }
}`,...(y=(E=l.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var w,I,z;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leftIcon: <Search size={16} />
  }
}`,...(z=(I=o.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var T,L,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    rightIcon: <Mail size={16} />
  }
}`,...(j=(L=n.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var W,D,M;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-full max-w-md">
      <Input size="xs" placeholder="Extra Small" />
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
      <Input size="xl" placeholder="Extra Large" />
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(M=(D=c.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var P,v,k;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    helperText: 'This field is currently disabled'
  }
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const q=["Default","WithLabel","WithHelperText","ErrorState","WithLeftIcon","WithRightIcon","Sizes","Disabled"];export{a as Default,i as Disabled,l as ErrorState,c as Sizes,t as WithHelperText,s as WithLabel,o as WithLeftIcon,n as WithRightIcon,q as __namedExportsOrder,O as default};

import{j as e}from"./cn-BEAWT3tw.js";import{C,a as v,b,c as j,d as y}from"./Card-DdVcXpOQ.js";import{B as n}from"./Button-rvIAffKl.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const E={title:"Components/Card",component:C,parameters:{layout:"centered",docs:{description:{component:"A flexible card component with optional header, title, content, and footer sections. Supports different variants and padding options."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outlined","elevated"],description:"The visual style variant of the card"},padding:{control:"select",options:["none","sm","md","lg"],description:"The padding inside the card"}}},a={args:{children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Card Title"}),e.jsx("p",{className:"text-gray-600",children:"This is a simple card with default styling."})]})}},s={args:{variant:"outlined",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Outlined Card"}),e.jsx("p",{className:"text-gray-600",children:"This card has a thicker border for emphasis."})]})}},t={args:{variant:"elevated",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Elevated Card"}),e.jsx("p",{className:"text-gray-600",children:"This card has a shadow for a floating effect."})]})}},r={render:()=>e.jsxs(C,{className:"w-full max-w-md",children:[e.jsx(v,{children:e.jsx(b,{children:"Product Card"})}),e.jsxs(j,{children:[e.jsx("p",{className:"text-gray-600 mb-4",children:"This is an example of a card using all the sub-components: header, title, content, and footer."}),e.jsx("div",{className:"bg-gray-100 h-32 rounded-md flex items-center justify-center",children:e.jsx("span",{className:"text-gray-500",children:"Image Placeholder"})})]}),e.jsxs(y,{children:[e.jsx(n,{variant:"outline",size:"sm",children:"Cancel"}),e.jsx(n,{size:"sm",children:"Save"})]})]}),parameters:{layout:"padded"}};var d,o,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">This is a simple card with default styling.</p>
      </div>
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,c,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Outlined Card</h3>
        <p className="text-gray-600">This card has a thicker border for emphasis.</p>
      </div>
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,h,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
        <p className="text-gray-600">This card has a shadow for a floating effect.</p>
      </div>
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,g,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Product Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">
          This is an example of a card using all the sub-components: header, title, content, and footer.
        </p>
        <div className="bg-gray-100 h-32 rounded-md flex items-center justify-center">
          <span className="text-gray-500">Image Placeholder</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">
          Save
        </Button>
      </CardFooter>
    </Card>,
  parameters: {
    layout: 'padded'
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const O=["Default","Outlined","Elevated","WithSubComponents"];export{a as Default,t as Elevated,s as Outlined,r as WithSubComponents,O as __namedExportsOrder,E as default};

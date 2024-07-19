import React, { useState, useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const codeString2 = `const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState('product1');
  
  const handleProductSelect = (productId) => {
    setSelectedProduct(productId);
  };
  const [isVisible, setIsVisible] = useState({
    product1: false,
    product2: false,
    product3: false,
  });`;

function CodeSnippet({ codeString }) {
  return (
    <SyntaxHighlighter language="javascript" style={a11yDark}>
      {codeString}
    </SyntaxHighlighter>
  );
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState('product1');
  const [prevProduct, setPrevProduct] = useState('product1');
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after visibility is set
          }
        });
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  const handleProductSelect = (productId) => {
    setPrevProduct(selectedProduct);
    setSelectedProduct(productId);
  };

  const getTransitionClass = (productId) => {
    if (selectedProduct === productId) {
      return '';
    }

    const direction = selectedProduct > prevProduct ? 'left' : 'right';
    return `transform transition-transform ${
      selectedProduct === productId
        ? `translate-x-0 `
        : direction === 'left'
        ? `-translate-x-full`
        : `translate-x-full`
    }`;
  };

  return (
    <section className="p-5 mt-10 max-w-[1440px] m-auto overflow-hidden">
      {/* Tab buttons */}
      <div className="flex justify-center gap-5 mb-5">
        <button
          className={`text-black text-nowrap rounded-full py-2 px-5 transition ${
            selectedProduct === 'product1' ? 'bg-white' : ' text-white'
          }`}
          onClick={() => handleProductSelect('product1')}
        >
          
          Product 1
        </button>
        <button
          className={`text-black text-nowrap rounded-full py-2 px-5 transition ${
            selectedProduct === 'product2' ? 'bg-white' : ' text-white'
          }`}
          onClick={() => handleProductSelect('product2')}
        >
          Product 2
        </button>
        {/* <button
          className={`text-black text-nowrap rounded-full py-2 px-5 transition ${
            selectedProduct === 'product3' ? 'bg-white' : ' text-white'
          }`}
          onClick={() => handleProductSelect('product3')}
        >
          Product 3
        </button> */}
      </div>

      <div  className={`relative  min-h-[600px] md:min-h-[400px]  overflow-hidden `}>
        <div
        ref={containerRef}
          className={`absolute top-0 w-full ${getTransitionClass('product1')}`}
          style={{ transitionDuration: '500ms' }}
        >
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 text-white    `}>
            <div className={`flex flex-col justify-between items-start ${isVisible?"right-in":""}`}>
              <p className="text-2xl mb-5">Product 1</p>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nesciunt unde facilis? Inventore nam, quos ut quae
                ipsam similique aspernatur, distinctio corporis nostrum fuga
                pariatur voluptatibus nihil ipsa! Consectetur, architecto. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Dolor
                necessitatibus omnis consequuntur officia earum illum sequi amet,
                quam quas nemo corrupti saepe architecto tenetur ducimus ab illo
                distinctio magnam reprehenderit.
              </p>
              <button>Learn more &gt;</button>
            </div>
            <div className={`${isVisible?"left-in":""}`}>
              <CodeSnippet codeString={codeString2} />
            </div>
          </div>
        </div>
        <div
          className={`absolute top-0 w-full ${getTransitionClass('product2')}`}
          style={{ transitionDuration: '500ms' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
            <div>
              <CodeSnippet codeString={codeString2} />
            </div>
            <div className='flex flex-col justify-between items-start'>
              <p className="text-2xl mb-5">Product 2</p>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nesciunt unde facilis? Inventore nam, quos ut quae
                ipsam similique aspernatur, distinctio corporis nostrum fuga
                pariatur voluptatibus nihil ipsa! Consectetur, architecto. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Dolor
                necessitatibus omnis consequuntur officia earum illum sequi amet,
                quam quas nemo corrupti saepe architecto tenetur ducimus ab illo
                distinctio magnam reprehenderit.
              </p>
              <button>Learn more &gt;</button>
            </div>
          </div>
        </div>
        {/* <div
          className={`absolute top-0 w-full ${getTransitionClass('product3')}`}
          style={{ transitionDuration: '500ms' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
            <div className='flex flex-col justify-between items-start'>
              <p className="text-2xl mb-5">Product 3</p>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nesciunt unde facilis? Inventore nam, quos ut quae
                ipsam similique aspernatur, distinctio corporis nostrum fuga
                pariatur voluptatibus nihil ipsa! Consectetur, architecto. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Dolor
                necessitatibus omnis consequuntur officia earum illum sequi amet,
                quam quas nemo corrupti saepe architecto tenetur ducimus ab illo
                distinctio magnam reprehenderit.
              </p>
              <button>Learn more &gt;</button>
            </div>
            <div>
              <CodeSnippet codeString={codeString2} />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Products;

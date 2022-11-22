import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import Navbar from "components/headers/studentsNavbar";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";

import { motion } from "framer-motion";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/design-illustration-2.svg";
import CustomersLogoStripImage from "../../images/customers-logo-strip.png";

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;

const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const Post = tw(motion.a)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)(props => [
  `background-image: url("${props.$imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const AuthorName = tw.h6`font-semibold text-lg`;

const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div``


const recentPosts = [
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Getting the most out of your vacation",
      authorName: "Aaron Patterson",
      url: "https://reddit.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Choosing the perfect Safaris in Africa",
      authorName: "Sam Phipphen",
      url: "https://reddit.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Hiking during the monsoon in Asia",
      authorName: "Tony Hawk",
      url: "https://timerse.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Must carry items while travelling to Thailand",
      authorName: "Himali Turn",
      url: "https://timerse.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1546971587-02375cbbdade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80",
      title: "An extremely funny trip to the Swiss Alps",
      authorName: "Naomi Watts",
      url: "https://timerse.com"
    },
  ]

export default ({ roundedHeaderButton }) => {
  return (
    <>
 <AnimationRevealPage disabled>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
        <Navbar />
        <RecentPostsContainer>
            <Heading>Recent Posts</Heading>
            <PostsContainer>
              {recentPosts.map((post, index) => (
              <Post key={index} href={post.url} className="group">
                <PostTextContainer>
                  <Title>{post.title}</Title>
                  <AuthorName>{post.authorName}</AuthorName>
                </PostTextContainer>
                <Image $imageSrc={post.postImageSrc} />
              </Post>
              ))}
            </PostsContainer>
          </RecentPostsContainer>

      </Content2Xl>
      </Container>
    </AnimationRevealPage>

      
      
    </>
  );
};

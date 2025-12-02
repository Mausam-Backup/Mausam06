"use client";

import Masonry from "react-masonry-css";
import { SmartImage, SmartLink, Flex, Heading, Text } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { projects } from "@/app/resources/content";

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    1024: 2,
    560: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {projects.items.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <div className={styles.imageWrapper}>
            <SmartImage
              priority={index < 10}
              sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
              radius="m"
              aspectRatio="16 / 9"
              src={project.image}
              alt={project.title}
              className={styles.gridItem}
              enlarge
            />
          </div>
          <Flex
            direction="column"
            gap="12"
            paddingX="16"
            paddingY="16"
          >
            <Heading as="h3" variant="heading-strong-m">
              {project.title}
            </Heading>
            {project.description && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                {project.description}
              </Text>
            )}
            <Flex gap="16" wrap>
              {project.caseStudy && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={project.caseStudy}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {project.link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={project.link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Flex>
        </div>
      ))}
    </Masonry>
  );
}

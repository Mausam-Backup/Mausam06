"use client";

import Masonry from "react-masonry-css";
import { SmartImage, SmartLink, Flex, Heading, Text, Avatar } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { projects, person } from "@/app/resources/content";

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
            
            <Flex direction="column" gap="8">
                {project.type && (
                    <Text variant="label-default-s" onBackground="neutral-medium">
                        Type: {project.type}
                    </Text>
                )}
                {project.tech && (
                    <Text variant="label-default-s" onBackground="neutral-medium">
                        Tech: {project.tech}
                    </Text>
                )}
            </Flex>

            {project.description && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                {project.description}
              </Text>
            )}

            {project.features && project.features.length > 0 && (
                <Flex direction="column" gap="4" className={styles.mobileOnly}>
                    <Text variant="label-default-s" onBackground="neutral-strong">Features:</Text>
                    <ul style={{ paddingLeft: '20px', margin: 0 }}>
                        {project.features.map((feature, i) => (
                            <li key={i}>
                                <Text variant="body-default-s" onBackground="neutral-weak">{feature}</Text>
                            </li>
                        ))}
                    </ul>
                </Flex>
            )}

            {project.outcome && (
                <Flex className={styles.mobileOnly}>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                        <Text as="span" variant="label-default-s" onBackground="neutral-strong">Outcome: </Text>
                        {project.outcome}
                    </Text>
                </Flex>
            )}

            <Flex fillWidth horizontal="space-between" align="center" gap="24" wrap>
              <Flex align="center" gap="8">
                 <Avatar src={person.avatar} size="s"/>
                 <Text variant="body-default-xs" onBackground="neutral-weak">{person.name}</Text>
              </Flex>
              <Flex gap="16">
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
          </Flex>
        </div>
      ))}
    </Masonry>
  );
}

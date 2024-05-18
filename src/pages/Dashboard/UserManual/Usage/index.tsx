import React from "react";
import { Divider, Typography } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const blockContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia quod, ab quidem, modi tempora, recusandae temporibus doloremque repellat earum voluptatum beatae impedit. Dolores, doloremque nobis? Fugiat maxime laborum fuga.
Amet voluptatibus placeat aspernatur nisi, dolores accusantium reiciendis tempora quis reprehenderit omnis quidem culpa odio magnam laborum nihil aut similique ab voluptate delectus perferendis sunt mollitia ducimus, esse deserunt? Illum!
Voluptatum nostrum provident labore a necessitatibus, amet officiis voluptatibus animi facere magni fugiat sapiente perspiciatis quidem ut ab odio, praesentium debitis aliquid placeat tenetur quibusdam. Omnis voluptates rerum eaque deserunt.
Quia similique vel harum iusto earum amet nulla accusantium assumenda quos nemo vero hic dicta animi tempora excepturi aspernatur consequuntur, sapiente autem iste dolorem? Officiis itaque autem magnam non id?
Vero eum alias ipsam explicabo odio eius, saepe eveniet quasi minus consectetur error numquam commodi rem quisquam reiciendis? Voluptatem ab accusamus ullam fugit! Beatae harum vel commodi. Id, itaque illum!`;

const UsagePage: React.FC = () => (
  <Typography>
    <Title>Mô tả</Title>

    <Paragraph>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ea non
      commodi assumenda, doloremque molestias, libero dignissimos quo ullam
      architecto dolorem minima cum alias accusantium culpa beatae saepe quasi?
      Maiores?
    </Paragraph>

    <Paragraph>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ea non
      commodi assumenda, doloremque molestias, libero dignissimos quo ullam
      architecto dolorem minima cum alias accusantium culpa beatae saepe quasi?
      Maiores?
      <Text strong>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ea non
        commodi assumenda, doloremque molestias, libero dignissimos quo ullam
        architecto dolorem minima cum alias accusantium culpa beatae saepe
        quasi? Maiores?
      </Text>
      .
    </Paragraph>

    <Title level={2}>Hướng dẫn sử dụng</Title>

    <Paragraph>
      We supply a series of design principles, practical patterns and high
      quality design resources (<Text code>Sketch</Text> and{" "}
      <Text code>Axure</Text>), to help people create their product prototypes
      beautifully and efficiently.
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <Link href="/docs/spec/proximity">Principles</Link>
        </li>
        <li>
          <Link href="/docs/spec/overview">Patterns</Link>
        </li>
        <li>
          <Link href="/docs/resources">Resource Download</Link>
        </li>
      </ul>
    </Paragraph>

    <Paragraph>
      Press <Text keyboard>Esc</Text> to exit...
    </Paragraph>

    <Divider />

    <Title>Tiêu đề</Title>

    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
      optio deleniti. Adipisci, ipsam. Ad molestias, aperiam culpa iste expedita
      delectus repellat voluptate maxime dolor veniam blanditiis quo eum
      obcaecati aspernatur!
    </Paragraph>

    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, a! Omnis
      velit, quae veniam, reiciendis rem, praesentium aspernatur non nemo minima
      qui quaerat? Excepturi quis voluptatem cumque. Voluptates, alias tempora.
      Ant Design。基于
      <Text mark>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis aut
        eius obcaecati natus doloremque ipsum!
      </Text>
      <Text strong>Lorem ipsum dolor sit amet.</Text>。
    </Paragraph>

    <Title level={2}>Tiêu đề 3</Title>

    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ea?（
      <Text code>Sketch</Text> OR<Text code>Axure</Text>
      ），Lorem ipsum dolor sit amet.。
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <Link href="/docs/spec/proximity-cn">About</Link>
        </li>
        <li>
          <Link href="/docs/spec/overview-cn">About</Link>
        </li>
        <li>
          <Link href="/docs/resources-cn">About</Link>
        </li>
      </ul>
    </Paragraph>

    <Paragraph>
      <blockquote>{blockContent}</blockquote>
      <pre>{blockContent}</pre>
    </Paragraph>

    <Paragraph>
      <Text keyboard>Esc</Text>Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Minus quis consequatur illo a incidunt dolor odit velit,
      libero tempora omnis unde architecto sit eaque earum. Beatae explicabo
      facilis voluptatum eaque.……
    </Paragraph>
  </Typography>
);

export default UsagePage;

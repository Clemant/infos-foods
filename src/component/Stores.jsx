import { useState } from "react";
import {
  Title,
  Table,
  Modal,
  Space,
  Button,
  Grid,
  Text,
  Input,
  LoadingOverlay,
  TextInput,
} from "@mantine/core";
import { useDisclosure, useId } from "@mantine/hooks";
import { useForm } from "@mantine/form";

const Stores = () => {
  const header = [{ caption: "Name" }, { caption: "Address" }];
  const storeList = [
    { name: "Express U", address: "Rue de " },
    { name: "Lidl", address: "Rue de 2" },
    { name: "Intermaché", address: "Rue de 3" },
    { name: "Diagonal", address: "Rue de 4" },
  ];

  const [opened, { open, close }] = useDisclosure(false);
  const id = useId();
  const createForm = useForm({
    initialValues: {
      name: "",
      address: "",
    },
  });

  const [stores, setStore] = useState(storeList);
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ name: "", address: "" });

  const openModal = (element) => {
    createForm.reset({
      name: "",
      address: "",
    });
    if (element != undefined) {
      console.log(element);
      setModalContent(element);
      createForm.setFieldValue("name", modalContent.name);
      createForm.setFieldValue("address", modalContent.address);
    }
    open();
  };

  const deleteStore = (element) => {
    console.log("delete:", element);
  };

  const handleSubmit = (values) => {
    console.log("form", values);
    setVisible(true);
    setTimeout(() => {
      // createForm.reset();
      setVisible(false);
    }, 1500);

    setTimeout(() => {
      close();
    }, 2000);
  };

  return (
    <div className="">
      <Grid mb="xl">
        <Grid.Col span={3}>
          <Title order={1}>Stores</Title>
        </Grid.Col>
        <Grid.Col span={3} offset={6}>
          <Button
            variant="outline"
            color="gray"
            radius="xl"
            onClick={() => openModal()}
          >
            Add Store
          </Button>
        </Grid.Col>
      </Grid>
      <Space h="xl" />
      <Table
        striped={true}
        highlightOnHover={true}
        verticalSpacing="xs"
        fontSize="md"
      >
        <thead>
          <tr>
            {header.map((element, index) => {
              return <th key={index}>{element.caption}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {stores.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.name}</td>
                <td>{element.address}</td>
                <td>
                  <Button
                    onClick={() => openModal(element)}
                    variant="outline"
                    color="green"
                    size="xs"
                    radius="xl"
                    mr="xs"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteStore(element)}
                    color="red"
                    size="xs"
                    radius="xl"
                  >
                    Del
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/** Modal for Edit */}
      <>
        <Modal
          size="md"
          opened={opened}
          onClose={close}
          title="Store detail"
          overlayProps={{
            color: "#E9ECEF",
            opacity: 0.55,
            blur: 3,
          }}
        >
          <LoadingOverlay visible={visible} overlayBlur={2} />
          {/* Modal content */}

          <form
            onSubmit={createForm.onSubmit((values) => handleSubmit(values))}
          >
            <TextInput
              label="Name store:"
              placeholder="Name store"
              mt="md"
              radius="md"
              {...createForm.getInputProps("name")}
            />
            <TextInput
              label="Address store:"
              placeholder="Address store"
              mt="sm"
              radius="md"
              {...createForm.getInputProps("address")}
            />
            <Space h="xl" />
            <Button type="submit">Submit</Button>
          </form>
        </Modal>
      </>
    </div>
  );
};

export default Stores;
